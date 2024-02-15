<script lang="ts">
    import * as Tooltip from "../tooltip"
    import Icon from "@iconify/svelte"
    import { createEventDispatcher } from "svelte";

    const dispatch  = createEventDispatcher();
    export let icon: string | null = null;
    export let iconOnly: boolean = false;
    
</script>

<li>
    <a href="." on:click|preventDefault={(e) => dispatch("click", e)}>
        {#if icon }
        <Tooltip.Root>
            <Tooltip.Trigger>
                <Icon icon={icon} class="text-xl" />
            </Tooltip.Trigger>
            <Tooltip.Content>
                {#if iconOnly}
                <p><slot/></p>
                {/if}
            </Tooltip.Content>
        </Tooltip.Root>
        {/if}
        {#if !iconOnly}
        <span><slot/></span>
        {/if}
    </a>
</li>