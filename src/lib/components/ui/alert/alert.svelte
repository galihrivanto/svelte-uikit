<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { Color, type ColorStrings } from "$lib/enums/color.enum"
    import { fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";

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
	<button class="btn btn-circle btn-xs absolute right-0 mr-2" on:click={() => closed = true }>
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...$$props}>
			<path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
		</svg>
	</button>
	{/if}
</div>
{/if}
