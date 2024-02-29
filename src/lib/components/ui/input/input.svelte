<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import { cn } from "$lib/utils";
	import type { InputEvents } from ".";
	import { Color, type ColorStrings } from '$lib/enums/color.enum';
	import { Size, type SizeStrings } from '$lib/enums/size.enum';

	export let color: Color | ColorStrings = Color.Neutral;
	export let size: Size | SizeStrings = Size.Md;
	export let bordered: boolean = false;
	export let ghost: boolean = false;
	export let error: boolean = false;

	type $$Props = HTMLInputAttributes & {
		color?: Color | ColorStrings;
		size?: Size | SizeStrings;
		bordered?: boolean;
		ghost?: boolean;
		error?: boolean;
	};
	type $$Events = InputEvents;

	let className: $$Props["class"] = undefined;
	export let value: $$Props["value"] = undefined;
	export { className as class };
</script>

<label class="relative">
	{#if $$slots.prepend}
		<div class="absolute top-1/2 left-3 transform -translate-y-1/2">
			<slot name="prepend" />
		</div>
	{/if}

	<input
		class={cn(
			"input w-full",
			className
		)}
		bind:value
		class:input-primary={color == Color.Primary}
		class:input-secondary={color == Color.Secondary}
		class:input-accent={color == Color.Accent}
		class:input-info={color == Color.Info}
		class:input-success={color == Color.Success}
		class:input-warning={color == Color.Warning}
		class:input-error={color == Color.Error || error}
		class:input-xs={size == Size.Xs}
		class:input-sm={size == Size.Sm}
		class:input-md={size == Size.Md}
		class:input-lg={size == Size.Lg}
		class:input-ghost={ghost}
		class:input-bordered={bordered}
		class:pl-14={!!$$slots.prepend}
		class:pr-14={!!$$slots.append}
		on:blur
		on:change
		on:click
		on:focus
		on:focusin
		on:focusout
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

	{#if $$slots.append}
		<div class="absolute top-1/2 right-3 transform -translate-y-1/2">
			<slot name="append"/>
		</div>
	{/if}
</label>
