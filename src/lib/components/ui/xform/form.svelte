<script lang="ts">
    import type { Result, ErrorBags, ApiError } from ".";

    let errors: ErrorBags = {};
    let rawErrors: []
    let busy: boolean = false;
    let submitCallback: () => Promise<Result>;

    export async function registerSubmit(callback: () => Promise<Result>) {
       submitCallback = callback;
    }

    async function onSubmit() {
        busy = true 
        errors = {}

        try {
            const result = await submitCallback()
            console.log("result: ", result)
        } catch (e) 
        {
            errors = {}
            const apiError = e as ApiError;
            for (const f of apiError.fields) {
                errors[f.field] = f
            }
        }
        busy = false 
    }

</script>

<form class="flex flex-col gap-4" on:submit={() => onSubmit()}>
    <div class="flex flex-col gap-2">
        <slot {errors} {busy} />
    </div>
    <div class="flex flex-row-reverse gap-2">
        <slot name="action" {busy} />
    </div>
</form>