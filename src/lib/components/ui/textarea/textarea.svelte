<script lang="ts">
	import type { HTMLTextareaAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;
	export let bordered: boolean = false;
	export let ghost: boolean = false;

	type $$Props = HTMLTextareaAttributes  & {
		color?: Color | ColorStrings;
		size?: Size | SizeStrings;
		bordered?: boolean;
		ghost?: boolean;
	};

	let className: $$Props["class"] = undefined;
	export let value: $$Props["value"] = undefined;
	export { className as class };
</script>

<textarea
	class={cn(
		"textarea",
		className
	)}
	bind:value
	class:textarea-primary={color == Color.Primary}
	class:textarea-secondary={color == Color.Secondary}
	class:textarea-accent={color == Color.Accent}
	class:textarea-info={color == Color.Info}
	class:textarea-success={color == Color.Success}
	class:textarea-warning={color == Color.Warning}
	class:textarea-error={color == Color.Error}
	class:textarea-xs={size == Size.Xs}
	class:textarea-sm={size == Size.Sm}
	class:textarea-md={size == Size.Md}
	class:textarea-lg={size == Size.Lg}
	class:textarea-ghost={ghost}
	class:textarea-bordered={bordered}
	on:blur
	on:change
	on:click
	on:focus
	on:keydown
	on:keypress
	on:keyup
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:paste
	on:input
	{...$$restProps}
/>
