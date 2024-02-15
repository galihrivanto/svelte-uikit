<script lang="ts">
    import Dropdown from "$lib/dropdown";

</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2 p-4">
    <Dropdown.Root>
        <button slot="trigger" class="btn btn-primary">Click</button>
        <svelte:fragment slot="content">
            <Dropdown.Menu>Menu 1</Dropdown.Menu>
            <Dropdown.Menu>Menu 2</Dropdown.Menu>
            <Dropdown.Menu>Menu 3</Dropdown.Menu>
            <Dropdown.Menu>Menu 4</Dropdown.Menu>
        </svelte:fragment>
    </Dropdown.Root>
    <Dropdown.Root>
        <button slot="trigger" class="btn btn-primary">Click</button>
        <svelte:fragment slot="content">
            <Dropdown.Menu icon="mdi:access-point">Menu 1</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:alert-circle">Menu 2</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:account-box">Menu 3</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:cancel">Menu 4</Dropdown.Menu>
        </svelte:fragment>
    </Dropdown.Root>
    <Dropdown.Root iconOnly>
        <button slot="trigger" class="btn btn-primary">Click</button>
        <svelte:fragment slot="content">
            <Dropdown.Menu icon="mdi:access-point" iconOnly>Menu 1</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:alert-circle" iconOnly>Menu 2</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:account-box" iconOnly>Menu 3</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:cancel" iconOnly>Menu 4</Dropdown.Menu>
        </svelte:fragment>
    </Dropdown.Root>
    <Dropdown.Root orientation="horizontal" iconOnly>
        <button slot="trigger" class="btn btn-primary">Click</button>
        <svelte:fragment slot="content">
            <Dropdown.Menu icon="mdi:access-point" iconOnly tooltip="menu 1" tooltipPosition="bottom">Menu 1</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:alert-circle" iconOnly tooltip="menu 2" tooltipPosition="bottom">Menu 2</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:account-box" iconOnly tooltip="menu 3" tooltipPosition="bottom">Menu 3</Dropdown.Menu>
            <Dropdown.Menu icon="mdi:cancel" iconOnly tooltip="menu 4" tooltipPosition="bottom">Menu 4</Dropdown.Menu>
        </svelte:fragment>
    </Dropdown.Root>

</div>
