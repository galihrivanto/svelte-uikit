<script lang="ts">
	import { Button as ButtonPrimitive } from "bits-ui";
	import { cn, classIf } from "$lib/utils";
	import { type Events } from ".";
	import { Color, type ColorStrings } from "$lib/enums/color.enum"
	import { Size, type SizeStrings} from "$lib/enums/size.enum"

	type $$Props = ButtonPrimitive.Props & {
		color?: Color | ColorStrings;
		size?: Size | SizeStrings;
		active?: boolean;
		link?: boolean;
		outline?: boolean;
		wide?: boolean;
		circle?: boolean;
		square?: boolean;
		block?: boolean;
		loading?: boolean;
		animation?: boolean;
		responsive?: boolean;
		glass?: boolean;
		ghost?: boolean;
	};
	type $$Events = Events;

	let className: $$Props["class"] = undefined;
	export let color: $$Props["color"] = Color.Default;
	export let size: $$Props["size"] = Size.Md;
	export let active: $$Props["active"] = false;
	export let outline: $$Props["outline"] = false;
	export let wide: $$Props["wide"] = false;
	export let glass: $$Props["glass"] = false;
	export let square: $$Props["square"] = false;
	export let circle: $$Props["circle"] = false;
	export let block: $$Props["block"] = false;
	export let loading: $$Props["loading"] = false;
	export let animation: $$Props["animation"] = true;
	export let responsive: $$Props["responsive"] = false;
	export let link: $$Props["link"] = false;
	export let ghost: $$Props["ghost"] = false;

	export let builders: $$Props["builders"] = [];
	export { className as class };
</script>

<ButtonPrimitive.Root
	{builders}
	class={cn(
		"btn",
		classIf(color == Color.Neutral, "btn-neutral"),
		classIf(color == Color.Primary, "btn-primary"),
		classIf(color == Color.Secondary, "btn-secondary"),
		classIf(color == Color.Accent, "btn-accent"),
		classIf(color == Color.Info, "btn-info"),
		classIf(color == Color.Warning, "btn-warning"),
		classIf(color == Color.Error, "btn-error"),
		classIf(size == Size.Xs, "btn-xs"),
		classIf(size == Size.Sm, "btn-sm"),
		classIf(size == Size.Md, "btn-md"),
		classIf(size == Size.Lg, "btn-lg"),
		classIf(active == true, "btn-active"),
		classIf(outline == true, "btn-outline"),
		classIf(wide == true, "btn-wide"),
		classIf(glass == true, "btn-glass"),
		classIf(square == true, "btn-square"),
		classIf(circle == true, "btn-circle"),
		classIf(block == true, "btn-block"),
		classIf(loading == true, "btn-loading"),
		classIf(animation == true, "btn-animation"),
		classIf(responsive == true, "btn-responsive"),
		classIf(link == true, "btn-link"),
		classIf(ghost == true, "btn-ghost"),
		className
	)}
	type="button"
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</ButtonPrimitive.Root>
