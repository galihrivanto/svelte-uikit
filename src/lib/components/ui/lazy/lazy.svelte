<script lang="ts">
  import { onMount } from "svelte";

  type $$Props = typeof $$props & {
    component: () => Promise<any>;
    delay?: number;
  };

  export let component: $$Props["component"];
  export let delay: $$Props["delay"] = undefined;

  let loading: Promise<any>;

  onMount(() => {
    setTimeout(() => {
      loading = component?.();
    }, delay ? delay : 0)
  })
</script>

{#if loading}
  {#await loading}
    <slot />
  {:then {default: LoadedComponent}}
    <LoadedComponent {...$$restProps} />
  {/await}	
{:else}
  <slot />
{/if}

