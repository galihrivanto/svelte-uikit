<script lang="ts">
	import { Select as SelectPrimitive } from "bits-ui";
	import { ChevronDown } from "lucide-svelte";
	import { cn, classIf } from "$lib/utils";
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;
	export let bordered: boolean = false;

	type $$Props = SelectPrimitive.TriggerProps  & {
		color?: Color | ColorStrings;
		size?: Size | SizeStrings;
		bordered?: boolean;
		ghost?: boolean;
	};
	type $$Events = SelectPrimitive.TriggerEvents;

	let className: $$Props["class"] = undefined;
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
		classIf(color == Color.Error, "select-error"),
		classIf(size == Size.Xs, "select-xs"),
		classIf(size == Size.Sm, "select-sm"),
		classIf(size == Size.Md, "select-md"),
		classIf(size == Size.Lg, "select-lg"),
		classIf(bordered, "select-bordered")
	)}
	{...$$restProps}
	let:builder
	on:click
	on:keydown
>
	<slot {builder} />
</SelectPrimitive.Trigger>
