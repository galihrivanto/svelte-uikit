<script lang="ts">
    import Tooltip from "$lib/tooltip"
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2">
    <Tooltip.Root>
        <Tooltip.Trigger>
            <button class="btn">Hover</button>
        </Tooltip.Trigger>
        <Tooltip.Content>
            <p>Tooltip content</p>
        </Tooltip.Content>
    </Tooltip.Root>
</div>