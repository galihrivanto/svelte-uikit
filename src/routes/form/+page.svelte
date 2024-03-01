<script lang="ts">
    import { type Result, type ErrorBags } from "$lib/xform";
    import Button from "$lib/button";
    import Input from "$lib/input";
    import { FormLabel } from "$lib/label";
    let errors: ErrorBags = {}
    let busy: boolean = false 


    async function submit(): Promise<void> {            
        console.log("on submit")
        busy = true 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                errors = {
                    "input1": {
                        field: "input1",
                        error: "this input is error"
                    },
                    "input2":     {
                        field: "input2",
                        error: "this input is also error"
                    }
                }

                console.log("reject", errors)
                reject(errors)
                busy = false 

            }, 5000)
        })
    }

</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2">
    <form on:submit={() => submit()}>
        <FormLabel {errors} key="input1">
            <svelte:fragment slot="label">Test Input</svelte:fragment>
            <svelte:fragment let:error>
                <Input  bordered disabled={busy} {error}/>
            </svelte:fragment>
        </FormLabel>

        <FormLabel {errors} key="input2">
            <svelte:fragment slot="label">Test Input</svelte:fragment>
            <svelte:fragment let:error>
                <Input  bordered disabled={busy} {error} />
            </svelte:fragment>
        </FormLabel>
    
        <Button type="submit" color="primary" loading={busy}>Click Me!!</Button>

    </form>
</div>