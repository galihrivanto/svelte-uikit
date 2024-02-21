<script lang="ts">
    import Indicator from "$lib/indicator";
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2 p-4">
    <Indicator color="primary">
        <svelte:fragment slot="badge">99+</svelte:fragment>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
    </Indicator>

    <Indicator color="secondary" horizontal="start">
        <svelte:fragment slot="badge"></svelte:fragment>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
    </Indicator>

    <Indicator color="secondary" horizontal="start" visible={false}>
        <svelte:fragment slot="badge"></svelte:fragment>
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
    </Indicator>

    <div class="indicator">
        <span class="indicator-item badge badge-secondary"></span> 
        <div class="grid w-32 h-32 bg-base-300 place-items-center">content</div>
      </div>
</div>