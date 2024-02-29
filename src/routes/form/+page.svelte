<script lang="ts">
    import { Form, type Result, type ErrorBags, type IForm } from "$lib/xform";
    import Button from "$lib/button";
    import Input from "$lib/input";
    import { FormLabel } from "$lib/label";
    import { onMount } from "svelte";

    let form: IForm;

    async function submit(): Promise<Result> {
        return new Promise((resolve,reject) => {          
            console.log("on submit")

            setTimeout(() => {
                let errors = {
                    message: "Validation error",
                    fields: [
                        {
                            field: "input1",
                            error: "this input is error"
                        },
                        {
                            field: "input2",
                            error: "this input is also error"
                        }
                    ]
                }

                console.log("reject", errors)

                reject(errors)

            }, 5000)
        })        
    }

    onMount(() => {
        form.registerSubmit(submit);
    })

</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2">
    <Form bind:this={form} >
        <svelte:fragment let:busy let:errors>
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
        </svelte:fragment>
        <svelte:fragment slot="action" let:busy>
            <Button type="submit" color="primary" loading={busy}>Click Me!!</Button>
        </svelte:fragment>
    </Form>
</div>