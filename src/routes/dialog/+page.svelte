<script lang="ts">
    import Dialog from "$lib/dialog";
    import Lazy from "$lib/lazy";
    import { noTransition } from "$lib/utils";

    const content = () => import("./content.svelte");
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2">
    <Dialog.Root>
        <Dialog.Trigger>
            <button class="btn btn-primary">Show Dialog</button>
        </Dialog.Trigger>
        <Dialog.Content 
            class="border border-base-100/40 p-4 w-96"
            transition={noTransition}
        >
            <h2 class="text-lg font-semibold leading-none tracking-tight flex flex-row gap-2 items-center mb-4">
                Dialog Title
            </h2>
            <span>Dialog content</span>
        </Dialog.Content>
    </Dialog.Root>

    <Dialog.Root>
        <Dialog.Trigger>
            <button class="btn btn-primary">Lazy Content</button>
        </Dialog.Trigger>
        <Dialog.Content class="border border-base-100/40 p-4 w-96">
            <Lazy component={content} delay={10000}>
                loading content ...
            </Lazy>
        </Dialog.Content>
      </Dialog.Root>
</div>