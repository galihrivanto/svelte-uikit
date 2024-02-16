<script lang="ts">
    import { onMount } from "svelte";
  
    export let component: any;
    export let delay: number | null = null;
  
    let loadedComponent: any = null;
    let timeout: ReturnType<typeof setTimeout>;
    let showFallback = delay != null;
  
    let props;
    $: {
      const { component, delay, ...restProps } = $$props;
      props = restProps;
    }
  
    onMount(() => {
      if (delay) {
        timeout = setTimeout(() => {
          showFallback = true;
        }, delay);
      }
      
      component().then((module: {default: any}) => {
        loadedComponent = module.default;
      });
      return () => clearTimeout(timeout);
    });
  </script>
  
  {#if loadedComponent}
    <svelte:component this={loadedComponent} {...props} />
  {:else if showFallback}
    <slot />
  {/if}
  