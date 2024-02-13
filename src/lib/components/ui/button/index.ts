import Root from "./button.svelte";
import { tv, type VariantProps } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";
import { Color, type ColorStrings } from "$lib/enums/color.enum"
import { Size, type SizeStrings} from "$lib/enums/size.enum"

const buttonVariants = tv({
	base: "btn",
	variants: {
		size: {
			default: "btn-md",
			xs: "btn-xs",
			md: "btn-md",
			sm: "btn-sm",
			lg: "btn-lg"
		},
		color: {
			default: "",
			primary: "btn-primary",
			secondary: "btn-secondary",
			info: "btn-info",
			warning: "btn-warning",
			error: "btn-error"
		},
		wide: {

		}		
	},
	defaultVariants: {
		color: "default",
		size: "default",
	},
});

type Props = ButtonPrimitive.Props & {
	color?: Color | ColorStrings;
	size?: Size | SizeStrings;
	link?: boolean;
	outline?: boolean;
	circle?: boolean;
	glass?: boolean;
	ghost?: boolean;
};

type Events = ButtonPrimitive.Events;

export {
	Root,
	type Props,
	type Events,
	//
	Root as Button,
	type Props as ButtonProps,
	type Events as ButtonEvents,
	buttonVariants,
};
