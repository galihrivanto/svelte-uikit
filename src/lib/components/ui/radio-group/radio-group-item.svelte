<script lang="ts">
	import { RadioGroup as RadioGroupPrimitive } from "bits-ui";
	import Icon from "@iconify/svelte";
	import { classIf, cn } from "$lib/utils";
    import { Color, type ColorStrings } from "$lib/enums/color.enum";

	type $$Props = RadioGroupPrimitive.ItemProps & {
		color?: Color | ColorStrings
	};
	type $$Events = RadioGroupPrimitive.ItemEvents;

	let className: $$Props["class"] = undefined;
	export let color: $$Props["color"] = Color.Neutral;
	export let value: $$Props["value"];
	export { className as class };
</script>

<RadioGroupPrimitive.Item
	{value}
	class={cn(
		"radio",
		classIf(color == Color.Primary, "radio-primary"),
		classIf(color == Color.Secondary, "radio-secondary"),
		classIf(color == Color.Accent, "radio-accent"),
		classIf(color == Color.Success, "radio-success"),
		classIf(color == Color.Warning, "radio-warning"),
		classIf(color == Color.Error, "radio-error"),
		className
	)}
	{...$$restProps}
	on:click
>
	<div class="flex items-center justify-center">
		<RadioGroupPrimitive.ItemIndicator>
			<Icon icon="mdi:circle" class="h-4 w-4 {
				cn(
					classIf(color == Color.Primary, "text-primary"),
					classIf(color == Color.Secondary, "text-secondary"),
					classIf(color == Color.Accent, "text-accent"),
					classIf(color == Color.Success, "text-success"),
					classIf(color == Color.Warning, "text-warning"),
					classIf(color == Color.Error, "text-error"),
				)
			}" />
		</RadioGroupPrimitive.ItemIndicator>
	</div>
</RadioGroupPrimitive.Item>

