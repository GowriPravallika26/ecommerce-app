export default function ProductCard({ product }) {
  const addToCart = async () => {
    await fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id, quantity: 1 })
    });
  };

  return (
    <div data-testid={`product-card-${product.id}`}>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <img src={product.imageUrl} />

      <button
        data-testid={`add-to-cart-button-${product.id}`}
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
