<script lang="ts">
	import { Button as ButtonPrimitive } from "bits-ui";
	import { cn, classIf } from "$lib/utils";
	import { buttonVariants, type Props, type Events } from ".";
	import { Color, type ColorStrings } from "$lib/enums/color.enum"
	import { Size, type SizeStrings} from "$lib/enums/size.enum"

	type $$Props = Props;
	type $$Events = Events;

	let className: $$Props["class"] = undefined;
	export let color: Color | ColorStrings = Color.primary;
	export let size: Size | SizeStrings = Size.Md;
	export let builders: $$Props["builders"] = [];
	export { className as class };

	export let active: boolean = false;
	export let outline: boolean = false;
	export let wide: boolean = false;
	export let glass: boolean = false;
	export let square: boolean = false;
	export let circle: boolean = false;
	export let block: boolean = false;
	export let loading: boolean = false;
	export let animation: boolean = true;
	export let responsive: boolean = false;
	export let link: boolean = false;
	export let ghost: boolean = false;
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(
		buttonVariants({ color, size, className }),
		classIf(active, "btn-active"),
		classIf(outline, "btn-outline"),
		classIf(wide, "btn-wide"),
		classIf(glass, "btn-glass"),
		classIf(square, "btn-square"),
		classIf(circle, "btn-circle"),
		classIf(block, "btn-block"),
		classIf(loading, "btn-loading"),
		classIf(animation, "btn-animation"),
		classIf(responsive, "btn-responsive"),
		classIf(link, "btn-link"),
		classIf(ghost, "btn-ghost")
	)}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
