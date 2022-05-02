export async function get() {
    return {
        body: {
            product: {
                image: "product_1/vetement1.jpg",
                name: "Product 1",
                price: "50.00",
                status: undefined
            }
        }
    };
  }
  