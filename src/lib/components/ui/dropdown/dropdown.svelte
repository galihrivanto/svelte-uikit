<script lang="ts">
    import { Orientation, type OrientationStrings } from "$lib/enums/orientation.enum";
    import * as Popover from "../popover";
    import { createEventDispatcher } from "svelte";

    const dispatch  = createEventDispatcher();

    export let orientation: Orientation | OrientationStrings = Orientation.Vertical;
    export let iconOnly: boolean = false;
    export let open: boolean = false;
    export let closeOnClick: boolean = false;

    function onContentClick() {
        if (closeOnClick) {
            open = false;
        }

        dispatch("click:content")
    }
    
</script>

<Popover.Root bind:open>
    <Popover.Trigger>
        <slot name="trigger"/>
    </Popover.Trigger>
    <Popover.Content 
        on:click={() => onContentClick()}
        class="p-0 bg-base-100 {iconOnly ? "w-fit" : "w-56" } {$$props.class}" sideOffset={5}
    >
        <ul class="menu bg-base-100 rounded-box { orientation == Orientation.Horizontal ? "menu-horizontal" : "menu-vertical"}">
            <slot name="content" />
        </ul>
    </Popover.Content>
</Popover.Root>