<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";
	import * as Dialog from ".";
	import { cn, flyAndScale } from "$lib/utils";
	import Icon from "@iconify/svelte";

	type $$Props = DialogPrimitive.ContentProps & {
		backdrop?: boolean;
	};

	let className: $$Props["class"] = undefined;
	export let backdrop: $$Props["backdrop"] = false;
	export let transition: $$Props["transition"] = flyAndScale;
	export let transitionConfig: $$Props["transitionConfig"] = {
		duration: 200,
	};
	export { className as class };
</script>

<Dialog.Portal>
	<Dialog.Overlay {backdrop} />
	<DialogPrimitive.Content
		{transition}
		{transitionConfig}
		class={cn(
			// "modal-box", FIXME: modal-box not overriden
			"shadow-lg rounded-lg", 
			"fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%]",
			className
		)}
		{...$$restProps}
	>
		<slot />
		<DialogPrimitive.Close
			class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
		>
			<Icon icon="mdi:close" class="h-4 w-4" />
		</DialogPrimitive.Close>
	</DialogPrimitive.Content>
</Dialog.Portal>
