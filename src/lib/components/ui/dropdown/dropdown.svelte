<script lang="ts">
    import { Orientation, type OrientationStrings } from "$lib/enums/orientation.enum";
    import * as Popover from "../popover";

    export let orientation: Orientation | OrientationStrings = Orientation.Vertical;
    export let iconOnly: boolean = false;

</script>

<Popover.Root>
    <Popover.Trigger>
        <slot name="trigger"/>
    </Popover.Trigger>
    <Popover.Content class="p-0 bg-base-100 {iconOnly ? "w-fit" : "w-56" } {$$props.class}" sideOffset={5}>
        <ul class="menu bg-base-100 rounded-box { orientation == Orientation.Horizontal ? "menu-horizontal" : "menu-vertical"}">
            <slot name="content"/>
        </ul>
    </Popover.Content>
</Popover.Root>