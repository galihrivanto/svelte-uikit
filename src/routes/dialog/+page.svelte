<script lang="ts">
    import Dialog from "$lib/dialog";
    import Lazy from "$lib/lazy";


    const content = () => import("./content.svelte")

</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2">
    <Dialog.Root>
        <Dialog.Trigger>
            <button class="btn btn-primary">Show Dialog</button>
        </Dialog.Trigger>
        <Dialog.Content class="sm:max-w-[425px]">
            <h1>Dialog Title</h1>
            <span>Dialog content</span>
        </Dialog.Content>
      </Dialog.Root>

    <Dialog.Root>
        <Dialog.Trigger>
            <button class="btn btn-primary">Lazy Content</button>
        </Dialog.Trigger>
        <Dialog.Content class="sm:max-w-[425px]">
            <Lazy component={content} delay={10000}>
                loading content ...
            </Lazy>
        </Dialog.Content>
      </Dialog.Root>
</div>