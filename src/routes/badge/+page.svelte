<script lang="ts">
    import Badge from "$lib/badge"
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2">
    <Badge>Neutral</Badge>
    <Badge color="primary">Primary</Badge>
    <Badge color="secondary">Secondary</Badge>
    <Badge color="accent">Accent</Badge>
    <Badge color="info">Info</Badge>
    <Badge color="warning">Warning</Badge>
    <Badge color="error">Error</Badge>
    <Badge size="xs">Extra small</Badge>
    <Badge size="sm">Small</Badge>
    <Badge size="md">Medium</Badge>
    <Badge size="lg">Large</Badge>
    <Badge color="success">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        success
    </Badge>
</div>

