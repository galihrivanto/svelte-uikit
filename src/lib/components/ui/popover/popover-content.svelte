<script lang="ts">
	import { Popover as PopoverPrimitive } from "bits-ui";
	import { cn, flyAndScale } from "$lib/utils";
	import { createEventDispatcher } from "svelte";

	const dispatch = createEventDispatcher();

	type $$Props = PopoverPrimitive.ContentProps;
	let className: $$Props["class"] = undefined;
	export let transition: $$Props["transition"] = flyAndScale;
	export let transitionConfig: $$Props["transitionConfig"] = undefined;
	export { className as class };

	function onContentClick(e: MouseEvent) {
		dispatch("click", e);
	}

</script>

<PopoverPrimitive.Content
	{transition}
	{transitionConfig}
	class={cn(
		"z-50 p-2 shadow dropdown-content bg-base-100 text-base-content rounded-box w-52",
		className
	)}
	{...$$restProps}
>
	<PopoverPrimitive.Arrow />
	<div role="presentation" on:click={(e) => onContentClick(e)} class="w-full">
		<slot />
	</div>
</PopoverPrimitive.Content>
