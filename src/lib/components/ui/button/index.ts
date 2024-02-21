import Root from "./button.svelte";
import { tv, type VariantProps } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";
import { Color, type ColorStrings } from "$lib/enums/color.enum"
import { Size, type SizeStrings} from "$lib/enums/size.enum"


type Events = ButtonPrimitive.Events;

export {
	Root,
	type Events,
	//
	Root as Button,
	type Events as ButtonEvents,
};
