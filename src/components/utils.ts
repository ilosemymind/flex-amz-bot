import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function excludeAttrs(attrs: Record<string, any>, target: string[]) {
	let result: Record<string, string> = {}

	for (const attr in attrs) {
		if (!target.includes(attr)) {
			result[attr] = attrs[attr];
		}
	}
	return result;
}