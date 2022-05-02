<script>
    export let title;
    export let products;
    export let currency;
</script>

{#if products.length > 0}
<h1 class="text-3xl p-8">{title}</h1>
<div class="h-full w-full flex flex-row flex-wrap">
    {#each products as product}
    <div class="max-w-sm p-8">
        <a class="w-full hover:text-black/60" href="/products/{product.slug}">
            <img class="w-full" src="/products/{product.image}" alt="{product.name} image"/>
            <div class="text-center mt-2">
                <h3>{product.name}</h3>
                <div>
                    <span>{currency} {product.price}</span>
                    {#if product.status}
                        <span> / {product.status}</span>
                    {/if}
                </div>
            </div>
        </a>
    </div>
    {/each}
</div>
{:else}
<div>
    No product found
</div>
{/if}