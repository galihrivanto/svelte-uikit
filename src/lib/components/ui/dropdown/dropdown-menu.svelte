<script lang="ts">
    import * as Tooltip from "../tooltip"
    import Icon from "@iconify/svelte"
    import { Position, type PositionStrings } from "$lib/enums/position.enum";
    import { Color, type ColorStrings } from "$lib/enums/color.enum"
    import { createEventDispatcher } from "svelte";

    const dispatch  = createEventDispatcher();
    export let icon: string | null = null;
    export let iconOnly: boolean = false;
    export let tooltip: string = "";
    export let tooltipPosition: Position | PositionStrings = Position.Right;
    export let tooltipColor: Color | ColorStrings = Color.Neutral;
    export let disabled: boolean = false;
    
    function onClick(e: MouseEvent) {
        if (disabled) return;

        dispatch("click", e)
    }

</script>

<li 
    role="presentation"
    class="{disabled ? "disabled": ""}"
    on:click|preventDefault={onClick} 
>
    <div 
        data-tip={iconOnly ? tooltip : ""}
        class="{tooltip != "" ? "tooltip" : ""}"
        class:tooltip-neutral={tooltipColor == Color.Neutral}
        class:tooltip-primary={tooltipColor == Color.Primary}
        class:tooltip-secondary={tooltipColor == Color.Secondary}
        class:tooltip-accent={tooltipColor == Color.Accent}
        class:tooltip-info={tooltipColor == Color.Info}
        class:tooltip-warning={tooltipColor == Color.Warning}
        class:tooltip-error={tooltipColor == Color.Error}
        class:tooltip-top={tooltipPosition == Position.Top}
        class:tooltip-bottom={tooltipPosition == Position.Bottom}
        class:tooltip-left={tooltipPosition == Position.Left}
        class:tooltip-right={tooltipPosition == Position.Right}
    >    
        <a href="." class="flex flex-row gap-4">
            {#if icon }
            <Icon icon={icon} class="text-xl" />
            {/if}
            {#if !iconOnly}
            <span><slot/></span>
            {/if}
        </a>
    </div>
</li>