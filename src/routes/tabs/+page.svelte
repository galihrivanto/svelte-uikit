<script lang="ts">
    import Tabs from "$lib/tabs";
    import Lazy from "$lib/lazy";

    const delayModuleLoad = (module: any) =>
        new Promise(res =>
        setTimeout(() => res(module), Math.random() * 2000),
        );
    const tab1 = () => import("./tab1.svelte").then(delayModuleLoad);
    const tab2 = () => import("./tab2.svelte").then(delayModuleLoad);
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2">
    <Tabs.Root value="account" class="w-[400px]">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">
          Make changes to your account here.
        </Tabs.Content>
        <Tabs.Content value="password">Change your password here.</Tabs.Content>
      </Tabs.Root>

      <h3>Lazy Loading Testing</h3>
      <Tabs.Root value="tab1" class="w-[400px]">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
            <Lazy component={tab1} delay={5000}>
                loading tab 1...
            </Lazy>
        </Tabs.Content>
        <Tabs.Content value="tab2">
            <Lazy component={tab2} delay={5000}>
                loading tab 2... 
            </Lazy>
        </Tabs.Content>
      </Tabs.Root>
</div>