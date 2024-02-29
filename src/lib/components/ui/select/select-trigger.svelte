<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import { cn, classIf } from "$lib/utils";
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	type $$Props = SelectPrimitive.TriggerProps  & {
		color?: Color | ColorStrings;
		size?: Size | SizeStrings;
		bordered?: boolean;
		ghost?: boolean;
		error?: boolean;
	};
	type $$Events = SelectPrimitive.TriggerEvents;

	let className: $$Props["class"] = undefined;
	export let color: $$Props["color"] = Color.Neutral;
	export let size: $$Props["size"] = Size.Md;
	export let bordered: $$Props["bordered"] = false;
	export let ghost: $$Props["ghost"] = false;
	export let error: $$Props["error"] = false;
	export { className as class };
</script>

<SelectPrimitive.Trigger
	class={cn(
		"select items-center",
		className,
		classIf(color == Color.Neutral, "select-neutral"),
		classIf(color == Color.Primary, "select-primary"),
		classIf(color == Color.Secondary, "select-secondary"),
		classIf(color == Color.Accent, "select-accent"),
		classIf(color == Color.Success, "select-success"),
		classIf(color == Color.Info, "select-info"),
		classIf(color == Color.Warning, "select-warning"),
		classIf(color == Color.Error || error == true, "select-error"),
		classIf(size == Size.Xs, "select-xs"),
		classIf(size == Size.Sm, "select-sm"),
		classIf(size == Size.Md, "select-md"),
		classIf(size == Size.Lg, "select-lg"),
		classIf(bordered == true, "select-bordered"),
		classIf(ghost == true, "select-ghost")
	)}
	{...$$restProps}
	let:builder
	on:click
	on:keydown
>
	<slot {builder} />
</SelectPrimitive.Trigger>
