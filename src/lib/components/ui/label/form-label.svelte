<script lang="ts">
	import { Label as LabelPrimitive } from "bits-ui"
    import { type ErrorBags } from "../xform"

	type $$Props = LabelPrimitive.Props & {
        key?: string;
        errors?: ErrorBags;
    }

	let className: $$Props["class"] = undefined
	export { className as class }
    export let errors: $$Props["errors"] = {}
    export let key: $$Props["key"] = undefined
    let message: string = ""
    let is_error: boolean = false 

    $: if (errors && key && key in errors) {
        is_error = true 
        message = errors[key].message
    }

</script>

<label class="form-control {className}" {...$$restProps}>
    {#if $$slots["label"] || $$slots["label-top-right"] }
	<div class="label">
		<span class="label-text"><slot name="label" /></span>
		<span class="label-text-alt"><slot name="label-top-right" /></span>		
	</div>
    {/if}
	<slot error={is_error} />
	<div class="label h-6">
		<span class="label-text-alt text-error">{is_error ? message : ""}</span>
	</div>
</label>