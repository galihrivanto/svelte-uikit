<script lang="ts">
	import { Dialog as DialogPrimitive } from "bits-ui";
	type $$Props = DialogPrimitive.PortalProps;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<DialogPrimitive.Portal class="{className}" {...$$restProps}>
	<slot />
</DialogPrimitive.Portal>
