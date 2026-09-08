import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
	{ rel: "preconnect", href: "https://fonts.googleapis.com" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&display=swap",
		rel: "stylesheet",
	},
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, viewport-fit=cover"
				/>
				<meta name="color-scheme" content="dark" />
				<meta name="theme-color" content="#1a1a1a" />
				<meta
					name="description"
					content="subeen regmi — software engineer based in reading, united kingdom."
				/>
				<meta name="apple-mobile-web-app-title" content="subeen regmi" />
				<script
					defer
					src="https://umami.subeenregmi.com/script.js"
					data-website-id="109b4501-7e4f-4d33-add2-8373df9c1677"
				></script>
				<title>subeen regmi</title>
				<Meta />
				<Links />
			</head>
			<body className="antialiased">
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details =
			error.status === 404
				? "The requested page could not be found."
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main className="pt-safe pb-safe container mx-auto min-h-dvh">
			<div className="p-4 pt-16">
				<h1 className="text-4xl md:text-5xl font-bold">{message}</h1>
				<p className="mt-2 text-xl md:text-2xl text-swhite-75">{details}</p>
				{stack && (
					<pre className="w-full mt-4 p-4 overflow-x-auto text-sm">
						<code>{stack}</code>
					</pre>
				)}
			</div>
		</main>
	);
}
