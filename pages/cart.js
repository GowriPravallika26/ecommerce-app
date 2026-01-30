import useSWR from "swr";

const fetcher = (url) => fetch(url).then(res => res.json());

export default function Cart() {
  const { data: items, mutate } = useSWR("/api/cart", fetcher);

  const removeItem = async (productId) => {
    await fetch("/api/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId })
    });
    mutate();
  };

  const total = items?.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  ) || 0;

  return (
    <>
      <h1>Shopping Cart</h1>

      {items?.map(item => (
        <div
          key={item.id}
          data-testid={`cart-item-${item.product.id}`}
        >
          <p>{item.product.name}</p>

          <input
            type="number"
            readOnly
            value={item.quantity}
            data-testid={`quantity-input-${item.product.id}`}
          />

          <button
            data-testid={`remove-item-button-${item.product.id}`}
            onClick={() => removeItem(item.product.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h2 data-testid="cart-total">Total: {total}</h2>
    </>
  );
}
