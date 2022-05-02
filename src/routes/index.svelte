<script>
    import Products from "../lib/components/Products.svelte";

    const currency = "€";
    const products = [
        {
            image: "product_1/vetement1.jpg",
            name: "Product 1",
            slug: "product_1",
            price: "50.00",
            status: undefined
        },
        {
            image: "product_2/vetement2.jpg",
            name: "Product 2",
            slug: "product_2",
            price: "40.00",
            status: "Comming soon"
        },
        {
            image: "product_3/vetement3.jpg",
            name: "Product 3",
            slug: "product_3",
            price: "30.00",
            status: undefined
        },
        {
            image: "product_4/vetement4.jpg",
            name: "Product 4",
            slug: "product_4",
            price: "20.00",
            status: "Sold out"
        },
        {
            image: "product_5/vetement5.jpg",
            name: "Product 5",
            slug: "product_5",
            price: "10.00",
            status: "On sale"
        }
    ];
</script>

<Products title="Products" {products} {currency} />
