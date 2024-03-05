<script lang="ts">
    import Card from "$lib/card";
    import Button from "$lib/button";
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-16">
    <Card.Root class="w-64" glass>
        <Card.Header>
            <Card.Title>Test Title</Card.Title>
            <Card.Description>Test Description</Card.Description>
        </Card.Header>
        <Card.Content>something content</Card.Content>
        <Card.Footer class="gap-2">
            <Button>Close</Button>
            <Button color="primary">Confirm</Button>
        </Card.Footer>
    </Card.Root>

    <Card.Root class="w-64">
        <Card.Content>
            something content
            wowo woekwaeads
        </Card.Content>
    </Card.Root>

    <Card.Root class="w-64" glass shadow>
        <Card.Content>
            something content
            wowo woekwaeads
        </Card.Content>
    </Card.Root>
</div>