<script lang="ts">
    import Drawer from "$lib/drawer";

    let openDrawer1:boolean = false;
    let openDrawer2:boolean = false;
    let size=400;

</script>

<div class="flex flex-col w-1/2 mx-auto mt-36 gap-2">
    <button class="btn" on:click={() => { openDrawer1 = !openDrawer1 }}>Open Drawer</button>
    <Drawer 
        bind:open={openDrawer1} 
        duration={500}
        style="width:{size}px; height:{size}px;" 
        class="z-0 border border-primary"
        on:close={() => { alert("drawer closed!!") }}
    >
        <div class="background z-0" style="width:{size}px; height:{size}px;" on:wheel={(e)=>{ e.preventDefault()}}>
        </div>
        <svelte:fragment slot="content">     
            <div class="p-3 mt-1 bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-full">
                this is drawer
            </div>             
        </svelte:fragment>
    </Drawer>

    <button class="btn" on:click={() => { openDrawer2 = !openDrawer2 }}>Open Drawer</button>
    <Drawer bind:open={openDrawer2} position="left" style="width:{size}px; height:{size}px;" class="z-0 border border-primary">
        <div class="background z-0" style="width:{size}px; height:{size}px;" on:wheel={(e)=>{ e.preventDefault()}}>
        </div>
        <svelte:fragment slot="content">     
            <div class="p-3 mt-1 bg-gradient-to-t from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-full">
                this is drawer
            </div>             
        </svelte:fragment>
    </Drawer>
</div>