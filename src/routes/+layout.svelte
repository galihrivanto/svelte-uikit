<script lang="ts">
    import "../app.css";
    import { onMount } from 'svelte'
    import { themeChange } from 'theme-change'

    let currentTheme = "light"
    let mounted = false
    const themes = [
        "light",
        "dark",
        "cupcake",
        "bumblebee",
        "emerald",
        "corporate",
        "synthwave",
        "retro",
        "cyberpunk",
        "valentine",
        "halloween",
        "garden",
        "forest",
        "aqua",
        "lofi",
        "pastel",
        "fantasy",
        "wireframe",
        "black",
        "luxury",
        "dracula",
        "cmyk",
        "autumn",
        "business",
        "acid",
        "lemonade",
        "night",
        "coffee",
        "winter",
        "dim",
        "nord",
        "sunset"
    ]

    function changeTheme(theme:string): void {
        console.log(document)
        if (!document) return 

        document.documentElement.setAttribute("data-theme", theme)
        themeChange(false)
    }

    onMount(() => {
        mounted = true 
    })

    $: {
        currentTheme;
        if (mounted) {
            changeTheme(currentTheme)
        }
    }
</script>

<div data-theme={currentTheme} class="w-full">
    <select bind:value={currentTheme} class="select select-bordered w-36 absolute right-3 top-3">
        {#each themes as theme}
        <option value={theme}>{theme}</option>
        {/each}
    </select>
</div>

<div data-theme={currentTheme}>
<slot />
</div>
