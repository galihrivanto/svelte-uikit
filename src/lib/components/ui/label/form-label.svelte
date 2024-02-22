<script lang="ts">
	import { Label as LabelPrimitive } from "bits-ui";

	type $$Props = LabelPrimitive.Props;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<label class="form-control {className}" {...$$restProps}>
    {#if $$slots["label"] || $$slots["label-top-right"] }
	<div class="label">
		<span class="label-text"><slot name="label" /></span>
		<span class="label-text-alt"><slot name="label-top-right" /></span>		
	</div>
    {/if}
	<slot />
    {#if $$slots["label-bottom-left"] || $$slots["label-bottom-right"] }
	<div class="label">
		<span class="label-text-alt"><slot name="label-bottom-left" /></span>
		<span class="label-text-alt"><slot name="label-bottom-right"/></span>
	</div>
    {/if}
</label>