<script lang="ts">
    import type { ErrorBags, ApiError, Submit } from ".";
    import Alert from "$lib/alert";
    import { createEventDispatcher } from "svelte";
    import Icon from "@iconify/svelte"

    const dispatch = createEventDispatcher();

    let is_error: boolean = false 
    let message: string = ""
    let errors: ErrorBags = {}
    export let busy: boolean = false
    export let submit: Submit

    async function doSubmit() {
        busy = true 
        errors = {}
        is_error = false 

        try {
            await submit()
            dispatch("success")
            
        } catch (e) 
        {
            // cast to Api error 
            const apiError = e as ApiError;

            console.log("api error:", apiError)
            
            // check if validation error
            if (apiError.response.data.error === "validation") {
                for (const f of apiError.response.data.fields) {
                    errors[f.field] = f
                }
            } else {
                message = apiError.response.data.error
                is_error = true 
            }
        }

        busy = false 
    }

</script>

<form class="flex flex-col gap-4" on:submit={() => doSubmit()}>
    {#if is_error}
        <Alert color="error">
            <Icon icon="mdi:warning" slot="icon" />
            {message}
        </Alert>    
    {/if}
    <div class="flex flex-col gap-2">
        <slot {errors} {busy} />
    </div>
    <div class="flex flex-row-reverse gap-2">
        <slot name="action" {busy} />
    </div>
</form>