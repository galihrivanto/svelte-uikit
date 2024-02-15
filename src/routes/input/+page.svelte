<script lang="ts">
    import Input from "$lib/input"
    import Textarea from "$lib/textarea"
    import Switch from "$lib/switch"
    import Slider from "$lib/slider"
    import RadioGroup from "$lib/radio-group"
    import Label from "$lib/label"
    import { Select, SelectItem, SelectTrigger, SelectContent, SelectGroup, SelectLabel, SelectValue, SelectInput } from "$lib/select"

    const fruits = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "blueberry", label: "Blueberry" },
        { value: "grapes", label: "Grapes" },
        { value: "pineapple", label: "Pineapple" }
    ];
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2 p-4">
    <Input placeholder="input text here" ></Input>
    <Input bordered placeholder="input text here" ></Input>
    <Input color="primary" placeholder="input text here" ></Input>
    <Input color="secondary" placeholder="input text here" ></Input>
    <Input color="accent" placeholder="input text here" ></Input>
    <Input color="info" placeholder="input text here" ></Input>
    <Input bordered placeholder="with prepend icon">
        <svelte:fragment slot="prepend">
            <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
        </svelte:fragment>
    </Input>
    <Input bordered placeholder="with append icon">
        <svelte:fragment slot="append">
            <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none w-8 h-8 " viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
        </svelte:fragment>
    </Input>
    <Input size="xs" bordered placeholder="input text here" ></Input>
    <Input size="sm" bordered placeholder="input text here" ></Input>
    <Input size="md" bordered placeholder="input text here" ></Input>
    <Input size="lg" bordered placeholder="input text here" ></Input>

    <Textarea placeholder="input text here" ></Textarea>
    <Textarea bordered placeholder="input text here" ></Textarea>
    <Textarea color="primary" placeholder="input text here" ></Textarea>
    <Textarea color="secondary" placeholder="input text here" ></Textarea>
    <Textarea color="accent" placeholder="input text here" ></Textarea>
    <Textarea color="info" placeholder="input text here" ></Textarea>
    <Textarea size="xs" bordered placeholder="input text here" ></Textarea>
    <Textarea size="sm" bordered placeholder="input text here" ></Textarea>
    <Textarea size="md" bordered placeholder="input text here" ></Textarea>
    <Textarea size="lg" bordered placeholder="input text here" ></Textarea>

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

    <Select>
        <SelectTrigger class="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {#each fruits as fruit}
                <SelectItem value={fruit.value} label={fruit.label}
                >{fruit.label}</SelectItem
                >
            {/each}
            </SelectGroup>
        </SelectContent>
        <SelectInput name="favoriteFruit" />
    </Select>

    <Select>
        <SelectTrigger class="w-[180px]" bordered>
            <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {#each fruits as fruit}
                <SelectItem value={fruit.value} label={fruit.label}
                >{fruit.label}</SelectItem
                >
            {/each}
            </SelectGroup>
        </SelectContent>
        <SelectInput name="favoriteFruit" />
    </Select>

      <Select>
        <SelectTrigger class="w-[180px]" color="primary">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {#each fruits as fruit}
              <SelectItem value={fruit.value} label={fruit.label}
                >{fruit.label}</SelectItem
              >
            {/each}
          </SelectGroup>
        </SelectContent>
        <SelectInput name="favoriteFruit" />
      </Select>

      <RadioGroup.Root>
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value="PNG" id="r1" color="warning" />
          <Label for="r1">PNG</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value="SVG" id="r2" color="warning" />
          <Label for="r2">SVG (In PRO only)</Label>
        </div>
        <RadioGroup.Input name="format" />
      </RadioGroup.Root>

      <RadioGroup.Root>
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value="PNG" id="r1" color="primary" />
          <Label for="r1">PNG</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value="SVG" id="r2" color="primary" />
          <Label for="r2">SVG (In PRO only)</Label>
        </div>
        <RadioGroup.Input name="format" />
      </RadioGroup.Root>

</div>


