<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { classIf, cn } from "$lib/utils";

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		glass?: boolean;
		shadow?: boolean;
	}

	let className: $$Props["class"] = undefined;
	export { className as class };
	export let glass: $$Props["glass"] = false
	export let shadow: $$Props["shadow"] = false 
</script>

<div
	class={cn(
		"card bg-base-100", 
		classIf(glass == true, "bg-base-100/20 border backdrop-blur border-base-100/40"),
		classIf(shadow == true, "shadow-lg"),
		className)}
	{...$$restProps}
>
	<slot />
</div>
