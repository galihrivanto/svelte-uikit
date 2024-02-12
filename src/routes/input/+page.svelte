<script lang="ts">
    import Input from "$lib/input"
    import Textarea from "$lib/textarea"
    import Switch from "$lib/switch"
    import Slider from "$lib/slider"
    import Select from "$lib/select"

    const fruits = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "blueberry", label: "Blueberry" },
        { value: "grapes", label: "Grapes" },
        { value: "pineapple", label: "Pineapple" }
    ];
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2 p-4">
    <Input.Root placeholder="input text here" ></Input.Root>
    <Input.Root bordered placeholder="input text here" ></Input.Root>
    <Input.Root color="primary" placeholder="input text here" ></Input.Root>
    <Input.Root color="secondary" placeholder="input text here" ></Input.Root>
    <Input.Root color="accent" placeholder="input text here" ></Input.Root>
    <Input.Root color="info" placeholder="input text here" ></Input.Root>
    <Input.Root bordered placeholder="with prepend icon">
        <svelte:fragment slot="prepend">
            <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
        </svelte:fragment>
    </Input.Root>
    <Input.Root bordered placeholder="with append icon">
        <svelte:fragment slot="append">
            <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-8 h-8 " viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
        </svelte:fragment>
    </Input.Root>
    <Input.Root size="xs" bordered placeholder="input text here" ></Input.Root>
    <Input.Root size="sm" bordered placeholder="input text here" ></Input.Root>
    <Input.Root size="md" bordered placeholder="input text here" ></Input.Root>
    <Input.Root size="lg" bordered placeholder="input text here" ></Input.Root>

    <Textarea.Root placeholder="input text here" ></Textarea.Root>
    <Textarea.Root bordered placeholder="input text here" ></Textarea.Root>
    <Textarea.Root color="primary" placeholder="input text here" ></Textarea.Root>
    <Textarea.Root color="secondary" placeholder="input text here" ></Textarea.Root>
    <Textarea.Root color="accent" placeholder="input text here" ></Textarea.Root>
    <Textarea.Root color="info" placeholder="input text here" ></Textarea.Root>
    <Textarea.Root size="xs" bordered placeholder="input text here" ></Textarea.Root>
    <Textarea.Root size="sm" bordered placeholder="input text here" ></Textarea.Root>
    <Textarea.Root size="md" bordered placeholder="input text here" ></Textarea.Root>
    <Textarea.Root size="lg" bordered placeholder="input text here" ></Textarea.Root>

    <Switch checked={true}/>
    <Switch color="primary" checked={true} />
    <Switch color="secondary" checked={true} />
    <Switch color="accent" checked={true}/>
    <Switch color="success" checked={true} />
    <Switch color="info" checked={true} />
    <Switch color="warning" checked={true}/>
    <Switch color="error" checked={true} />

    <Slider value={[50]} max={100} step={1} class="max-w-[70%] mb-2" />
    <Slider value={[50]} max={100} step={1} class="max-w-[70%] mb-2" color="primary" />
    <Slider value={[50]} max={100} step={1} class="max-w-[70%] mb-2" color="secondary" />
    <Slider value={[50]} max={100} step={1} class="max-w-[70%] mb-2" color="success" />

    <Select.Root>
        <Select.Trigger class="w-[180px]">
            <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
            <Select.Group>
            <Select.Label>Fruits</Select.Label>
            {#each fruits as fruit}
                <Select.Item value={fruit.value} label={fruit.label}
                >{fruit.label}</Select.Item
                >
            {/each}
            </Select.Group>
        </Select.Content>
        <Select.Input name="favoriteFruit" />
    </Select.Root>

    <Select.Root>
        <Select.Trigger class="w-[180px]" bordered>
            <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
            <Select.Group>
            <Select.Label>Fruits</Select.Label>
            {#each fruits as fruit}
                <Select.Item value={fruit.value} label={fruit.label}
                >{fruit.label}</Select.Item
                >
            {/each}
            </Select.Group>
        </Select.Content>
        <Select.Input name="favoriteFruit" />
    </Select.Root>

      <Select.Root>
        <Select.Trigger class="w-[180px]" color="primary">
          <Select.Value placeholder="Select a fruit" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            {#each fruits as fruit}
              <Select.Item value={fruit.value} label={fruit.label}
                >{fruit.label}</Select.Item
              >
            {/each}
          </Select.Group>
        </Select.Content>
        <Select.Input name="favoriteFruit" />
      </Select.Root>

</div>


