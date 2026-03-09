import { type ReactNode, useCallback, useEffect, useRef } from "react";

interface SpotlightContainerProps {
	children: ReactNode;
	className?: string;
	radius?: number;
	smoothing?: number; // Lerp factor (0-1), lower = smoother
}

export default function SpotlightContainer({
	children,
	className = "",
	radius = 150,
	smoothing = 0.15,
}: SpotlightContainerProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const mousePosRef = useRef<{ x: number; y: number } | null>(null);
	const intensitiesRef = useRef<Map<HTMLElement, number>>(new Map());
	const animationRef = useRef<number | null>(null);

	// Lerp function for smooth interpolation
	const lerp = (current: number, target: number, factor: number) =>
		current + (target - current) * factor;

	// Animation loop that smoothly updates intensities
	const animate = useCallback(() => {
		if (!containerRef.current) return;

		const items =
			containerRef.current.querySelectorAll<HTMLElement>(".spotlight-item");
		let needsUpdate = false;

		items.forEach((item) => {
			const currentIntensity = intensitiesRef.current.get(item) ?? 0;
			let targetIntensity = 0;

			if (mousePosRef.current) {
				const rect = item.getBoundingClientRect();
				const containerRect = containerRef.current?.getBoundingClientRect();
				if (!containerRect) return;

				// Get center of the item relative to container
				const itemCenterX = rect.left - containerRect.left + rect.width / 2;
				const itemCenterY = rect.top - containerRect.top + rect.height / 2;

				// Calculate distance from mouse to item center
				const distance = Math.sqrt(
					(mousePosRef.current.x - itemCenterX) ** 2 +
						(mousePosRef.current.y - itemCenterY) ** 2,
				);

				// Calculate target intensity (1 = fully lit, 0 = default dim)
				// Use a quadratic ease-out curve for more gradual falloff
				const linearIntensity = Math.max(0, 1 - distance / radius);
				targetIntensity = linearIntensity * linearIntensity; // Quadratic falloff
			}

			// Lerp toward target intensity
			const newIntensity = lerp(currentIntensity, targetIntensity, smoothing);

			// Only update if there's a meaningful difference
			if (Math.abs(newIntensity - currentIntensity) > 0.001) {
				intensitiesRef.current.set(item, newIntensity);
				item.style.setProperty(
					"--spotlight-intensity",
					newIntensity.toString(),
				);
				needsUpdate = true;
			} else if (Math.abs(newIntensity - targetIntensity) > 0.001) {
				// Snap to target if we're close enough
				intensitiesRef.current.set(item, targetIntensity);
				item.style.setProperty(
					"--spotlight-intensity",
					targetIntensity.toString(),
				);
			}
		});

		// Continue animation if values haven't settled
		if (needsUpdate) {
			animationRef.current = requestAnimationFrame(animate);
		} else {
			animationRef.current = null;
		}
	}, [radius, smoothing]);

	// Start animation loop when needed
	const startAnimation = useCallback(() => {
		if (animationRef.current === null) {
			animationRef.current = requestAnimationFrame(animate);
		}
	}, [animate]);

	// Document-level mouse tracking for extended detection area
	useEffect(() => {
		const handleDocumentMouseMove = (e: MouseEvent) => {
			if (!containerRef.current) return;

			const rect = containerRef.current.getBoundingClientRect();

			// Check if mouse is within extended bounds (container + radius)
			const isWithinBounds =
				e.clientX >= rect.left - radius &&
				e.clientX <= rect.right + radius &&
				e.clientY >= rect.top - radius &&
				e.clientY <= rect.bottom + radius;

			if (isWithinBounds) {
				mousePosRef.current = {
					x: e.clientX - rect.left,
					y: e.clientY - rect.top,
				};
				startAnimation();
			} else if (mousePosRef.current !== null) {
				// Only trigger fade out if we were previously tracking
				mousePosRef.current = null;
				startAnimation(); // Fade out
			}
		};

		document.addEventListener("mousemove", handleDocumentMouseMove);
		return () =>
			document.removeEventListener("mousemove", handleDocumentMouseMove);
	}, [radius, startAnimation]);

	// Cleanup animation on unmount
	useEffect(() => {
		return () => {
			if (animationRef.current !== null) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, []);

	return (
		<div ref={containerRef} className={className}>
			{children}
		</div>
	);
}
