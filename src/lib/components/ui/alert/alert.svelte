<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { Color, type ColorStrings } from "$lib/enums/color.enum"
    import { fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import Icon from "@iconify/svelte";

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		color?: Color | ColorStrings;
		closeable?: boolean;
	};
	
	let closed: boolean = false;
	let className: $$Props["class"] = undefined;
	export let color: $$Props["color"] = Color.Neutral;
	export let closeable: $$Props["closeable"] = false;
	export { className as class };
</script>

{#if !closed}
<div transition:fade={{delay: 100, duration: 500, easing: quintOut }} 
	role="alert"
	class="alert relative {className}"
	class:alert-success={color == Color.Success}
	class:alert-info={color == Color.Info}
	class:alert-warning={color == Color.Warning}
	class:alert-error={color == Color.Error}
	{...$$restProps}
>
	<slot name="icon" />
	<div>
		{#if $$slots.title}
		<h3><slot name="title" /></h3>
		<div class="text-xs"><slot /></div>
		{:else}
		<slot />
		{/if}
	</div>
	{#if closeable}
	<button class="btn btn-circle btn-xs btn-ghost absolute right-0 mr-2" on:click={() => closed = true }>
		<Icon icon="mdi:close" class="w-3 h-3"></Icon>
	</button>
	{/if}
</div>
{/if}
