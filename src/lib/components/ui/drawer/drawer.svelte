<script lang="ts">
    import { slide } from 'svelte/transition'
    import { quintOut } from 'svelte/easing'
    import { Position, type PositionStrings } from "."

    export let open: boolean = false;
    export let position: Position | PositionStrings = Position.Right;

    const classes = $$props.class ? $$props.class : ''
    const {class, ...restProps} = $$restProps

</script>

<div class="relative {classes}" {...restProps}>
    <div class="w-full h-full"
       role="presentation"
       on:click={() => { open = false }}
    >
        <slot />
    </div>

    {#if open}
    <div 
        transition:slide={{delay: 50, duration: 300, easing: quintOut, axis: 'x'}}
        class="bg-base-100 absolute inset-y-0 h-full w-1/2 {classes}"
        class:right-0={position == Position.Right}
        class:left-0={position == Position.Left}
    >
        <slot name="content" />
    </div>
    {/if}
</div>
  