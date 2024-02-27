<script lang="ts">
    import Dropdown from "$lib/dropdown";

    let dd1: boolean = false;
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2 p-4">
    <Dropdown.Root
        bind:open={dd1}
    >
        <button slot="trigger" class="btn btn-primary">Click</button>
        <svelte:fragment slot="content">
            <Dropdown.Menu >Menu 1</Dropdown.Menu>
            <Dropdown.Menu >Menu 2</Dropdown.Menu>
            <Dropdown.Menu >Menu 3</Dropdown.Menu>
            <Dropdown.Menu on:click={() => dd1 = false }>Menu 4</Dropdown.Menu>
        </svelte:fragment>
    </Dropdown.Root>
    <Dropdown.Root
        closeOnClick={true}
    >
        <button slot="trigger" class="btn btn-primary">Click</button>
        <svelte:fragment slot="content">
            <Dropdown.Menu icon="mdi:access-point" disabled on:click={() => console.log("menu 1")}>Menu 1</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:alert-circle" on:click={() => console.log("menu 2")}>Menu 2</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:account-box" on:click={() => console.log("menu 3")}>Menu 3</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:cancel" on:click={() => console.log("menu 4")}>Menu 4</Dropdown.Menu>
        </svelte:fragment>
    </Dropdown.Root>
    <Dropdown.Root iconOnly>
        <button slot="trigger" class="btn btn-primary">Click</button>
        <svelte:fragment slot="content">
            <Dropdown.Menu icon="mdi:access-point" iconOnly>Menu 1</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:alert-circle" iconOnly>Menu 2</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:account-box" iconOnly disabled>Menu 3</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:cancel" iconOnly>Menu 4</Dropdown.Menu>
        </svelte:fragment>
    </Dropdown.Root>
    <Dropdown.Root orientation="horizontal" iconOnly>
        <button slot="trigger" class="btn btn-primary">Click</button>
        <svelte:fragment slot="content">
            <Dropdown.Menu icon="mdi:access-point" iconOnly tooltip="menu 1" tooltipPosition="bottom">Menu 1</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:alert-circle" iconOnly tooltip="menu 2" tooltipPosition="bottom" disabled>Menu 2</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:account-box" iconOnly tooltip="menu 3" tooltipPosition="bottom">Menu 3</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:cancel" iconOnly tooltip="menu 4" tooltipPosition="bottom">Menu 4</Dropdown.Menu>
        </svelte:fragment>
    </Dropdown.Root>

</div>
