<script lang="ts">
    import Button from "$lib/button";
    import Icon from "@iconify/svelte"
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2">
    <Button>Default</Button>
    <Button color="neutral">Primary</Button>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="accent">Accent</Button>
    <Button color="info">Info</Button>
    <Button color="warning">Warning</Button>
    <Button color="error">Error</Button>
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
    <Button link>Link</Button>
    <Button outline>Outline</Button>
    <Button circle color="neutral">
        <Icon icon="mdi:alert-circle" class="text-2xl" />
    </Button>
    <Button glass>Glass</Button>
    <Button ghost>Ghost</Button>
    <Button loading>Loading</Button>
</div>