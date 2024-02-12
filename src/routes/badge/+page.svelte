<script lang="ts">
    import Badge from "$lib/badge"
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2">
    <Badge.Root>Neutral</Badge.Root>
    <Badge.Root color="primary">Primary</Badge.Root>
    <Badge.Root color="secondary">Secondary</Badge.Root>
    <Badge.Root color="accent">Accent</Badge.Root>
    <Badge.Root color="info">Info</Badge.Root>
    <Badge.Root color="warning">Warning</Badge.Root>
    <Badge.Root color="error">Error</Badge.Root>
    <Badge.Root size="xs">Extra small</Badge.Root>
    <Badge.Root size="sm">Small</Badge.Root>
    <Badge.Root size="md">Medium</Badge.Root>
    <Badge.Root size="lg">Large</Badge.Root>
    <Badge.Root color="success">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        success
    </Badge.Root>
</div>

