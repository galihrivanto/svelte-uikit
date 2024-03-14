<script lang="ts">
    import Progress from "$lib/progress"
</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2 p-4">
    <Progress max={100} value={70}></Progress>
    <Progress color="primary" max={100} value={50}></Progress>
    <Progress color="secondary" max={100} value={55}></Progress>
    <Progress color="accent" max={100} value={44}></Progress>
    <Progress color="info" max={100} value={80}></Progress>
    <Progress color="warning" max={100} value={90} class="h-1"></Progress>
    <Progress color="error" max={100} value={70} class="h-4"></Progress>
    <Progress color="error"></Progress>
    <progress class="progress w-56"></progress>
</div>