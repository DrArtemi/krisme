<script>
    import "../app.css";
    import SideBar from "../lib/components/SideBar.svelte";

    const product_categories = [
        { name: "Shirt", slug: "shirt" },
        { name: "Dress", slug: "dress"}
    ];
</script>

<div class="h-full flex flex-row">
    <div class="w-72 h-full flex-initial">
        <SideBar {product_categories} />
    </div>
    <div class="flex-1 p-12">
        <slot />
    </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css?family=Chivo&display=swap');
    :global(body) {
        font-family: 'Chivo', sans-serif;
    }
</style>