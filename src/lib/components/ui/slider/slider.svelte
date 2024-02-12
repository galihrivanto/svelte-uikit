<script lang="ts">
	import { Slider as SliderPrimitive } from "bits-ui";
	import { cn, classIf } from "$lib/utils";
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;

	type $$Props = SliderPrimitive.Props;

	let className: $$Props["class"] = undefined;
	export let value: $$Props["value"] = [0];
	export { className as class };

</script>

<SliderPrimitive.Root
	bind:value
	class={cn("relative flex w-full touch-none select-none items-center", className)}
	{...$$restProps}
	let:thumbs
>
	<span class="relative h-2 w-full grow overflow-hidden rounded-full bg-base-300">
		<SliderPrimitive.Range class={cn(
			"absolute h-full", 
			classIf(color == Color.Neutral, "bg-neutral"),
			classIf(color == Color.Primary, "bg-primary"),
			classIf(color == Color.Secondary, "bg-secondary"),
			classIf(color == Color.Accent, "bg-accent"),
			classIf(color == Color.Success, "bg-success"),
			classIf(color == Color.Info, "bg-info"),
			classIf(color == Color.Warning, "bg-warning"),
			classIf(color == Color.Error, "bg-error")
		)} />
	</span>
	{#each thumbs as thumb}
		<SliderPrimitive.Thumb
			{thumb}
			class={cn(
				"block h-5 w-5 rounded-full border-2 bg-base-100 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
				classIf(color == Color.Neutral, "border-neutral"),
				classIf(color == Color.Primary, "border-primary"),
				classIf(color == Color.Secondary, "border-secondary"),
				classIf(color == Color.Accent, "border-accent"),
				classIf(color == Color.Success, "border-success"),
				classIf(color == Color.Info, "border-info"),
				classIf(color == Color.Warning, "border-warning"),
				classIf(color == Color.Error, "border-error")
			)}
		/>
	{/each}
</SliderPrimitive.Root>
