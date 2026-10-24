import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const formatDate = (data: Date) =>
	data.toLocaleString(undefined, {
		dateStyle: "medium",
	});
