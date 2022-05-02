<script>
    import Products from "../../lib/components/Products.svelte";

    export let category;
    export let products;
    export let currency;
</script>

<Products title={category} {products} {currency} />