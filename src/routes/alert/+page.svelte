<script lang="ts"> 
    import Button from "$lib/button";
    import Alert from "$lib/alert";
    import { Toast, Toaster } from "$lib/toast";

    function showToast() {
        Toast("test something!!")
    }
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2">
    <Alert closeable class="shadow-lg">Alert Default</Alert>
    <Alert color="success">Alert Success</Alert>
    <Alert color="info">Alert Info</Alert>
    <Alert color="warning">Alert Warning</Alert>
    <Alert color="error" closeable>Alert Error</Alert>
    <Alert class="shadow-lg">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div class="flex justify-between w-full">
            <span>we use cookies for no reason.</span>
            <div>
                <button class="btn btn-sm">Deny</button>
                <button class="btn btn-sm btn-primary">Accept</button>
            </div>
        </div>
    </Alert>
    <Alert class="shadow-lg">
        <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <svelte:fragment slot="title">New message!</svelte:fragment>
        <div class="text-xs">You have 1 unread message</div>
    </Alert>

    <Button on:click={() => showToast()}>Test something!</Button>

    <Toaster />
</div>