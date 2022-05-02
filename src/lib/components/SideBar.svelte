<script>
    export let product_categories;
</script>

<div class="w-2/3 mx-auto">
    <a href="/"><img src="/logo_krisme.png"alt="Krisme Logo"/></a>
</div>
<div class="w-full p-8">
    <!-- Cart -->
    <div class="border-t border-black py-2">
        <div class="font-bold py-1 hover:text-black/60"><a href="/">Cart</a></div>
    </div>
    <!-- Products -->
    {#if product_categories.length > 0}
    <div class="border-t border-black py-2">
        <div class="font-bold py-1 hover:text-black/60"><a href="/">Products</a></div>
        <ul>
            {#each product_categories as category}
            <li class="hover:text-black/60">
                <a class="block" href="/categories/{category.slug}">{category.name}</a>
            </li>
            {/each}
        </ul>
    </div>
    {/if}
    <!-- Other -->
    <div class="border-t border-black py-2">
        <div class="font-bold py-1 hover:text-black/60"><a href="/about">About</a></div>
        <div class="font-bold py-1 hover:text-black/60"><a href="/contact">Contact</a></div>
    </div>
</div>