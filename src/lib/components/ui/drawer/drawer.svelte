<script lang="ts">
    import { slide } from 'svelte/transition';
    import { linear } from 'svelte/easing';
    import { Position, type PositionStrings } from ".";
    import { Loading } from "../loading";
    import { Button } from "../button"
    import Icon from "@iconify/svelte";

    export let open: boolean = false;
    export let delay: number = 50;
    export let duration: number = 300;
    export let position: Position | PositionStrings = Position.Right;
    let visible: boolean = false;

    const classes = $$props.class ? $$props.class : '';
    const {class, ...restProps} = $$restProps;

    $: {
        visible;
        console.log("visible?", visible);
    }

</script>

<div 
    class="relative {classes}" 
    class:flex-row-reverse={position == Position.Left}
    {...restProps}
>
    <div class="w-full h-full"
        role="presentation"
        on:click={() => { open = false }}
    >
        <slot />
    </div>

    {#if open}
    <div 
        transition:slide={{delay: delay, duration: duration, easing: linear, axis: 'x'}}  
        on:introend={() => { visible = true }}
        on:outrostart={() => { visible = false }}
        class="bg-base-100 absolute inset-y-0 h-full w-1/2 pt-8 {classes}"
        class:right-0={position == Position.Right}
        class:left-0={position == Position.Left}
    >        
        <Button 
            circle size="xs" 
            class="absolute top-1 {position == Position.Left ? "right-1" : "left-1"}"
            on:click={() => { open = false }}
        >
            <Icon icon={position == Position.Left ? "mdi:chevron-left" : "mdi:chevron-right"} class="w-4 h-4" />
        </Button>
        {#if visible}
            <slot name="content" />
        {:else}
            <div class="flex w-full h-full">
                <Loading class="mx-auto mt-4" />
            </div>
        {/if}
    </div>
    {/if}
</div>

  