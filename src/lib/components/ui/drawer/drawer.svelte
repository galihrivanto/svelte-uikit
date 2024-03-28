<script lang="ts">
    import { slide } from 'svelte/transition';
    import { linear } from 'svelte/easing';
    import { Position, slideTransition, type PositionStrings, type TransitionConfig } from ".";
    import { Loading } from "../loading";
    import { Button } from "../button";
    import { Size, type SizeStrings} from "$lib/enums/size.enum";
    import Icon from "@iconify/svelte";
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let open: boolean = false;
    export let delay: number = 50;
    export let duration: number = 300;
    export let transition: TransitionConfig = slideTransition(delay, duration);
    export let position: Position | PositionStrings = Position.Right;
    export let buttonSize: Size | SizeStrings = Size.Md;
    let visible: boolean = false;

    const classes = $$props.class ? $$props.class : '';
    const {class, ...restProps} = $$restProps;

    function onKeyUp(event: KeyboardEvent) {
        if (!open) return;

        if (event.key === 'Escape') {
            open = false ;
        }
    }

    function close() {
        open = false;
        dispatch("close")
    }

</script>

<svelte:window
    on:keyup={onKeyUp}
/>

<div 
    class="relative {classes}" 
    class:flex-row-reverse={position == Position.Left}
    {...restProps}
>
    <div class="w-full h-full"
        role="presentation"
        on:click={() => { close() }}
    >
        <slot />
    </div>

    {#if open}
    <div 
        transition:slide={ transition }  
        on:introend={() => { visible = true }}
        on:outrostart={() => { visible = false }}
        class="bg-base-100 absolute inset-y-0 h-full w-1/2 pb-16 {classes}"
        class:right-0={position == Position.Right}
        class:left-0={position == Position.Left}
    >        
        <Button 
            circle size={buttonSize} 
            class="absolute bottom-2 {position == Position.Left ? "right-2" : "left-2"}"
            on:click={() => close()}
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

  