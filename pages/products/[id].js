import prisma from "../../lib/prisma";

export async function getServerSideProps({ params }) {
  const product = await prisma.product.findUnique({
    where: { id: params.id }
  });

  if (!product) return { notFound: true };

  return { props: { product } };
}

export default function ProductPage({ product }) {
  return (
    <>
      <h1 data-testid="product-name">{product.name}</h1>
      <p data-testid="product-description">{product.description}</p>
      <p data-testid="product-price">{product.price}</p>

      <button data-testid="add-to-cart-button">Add to Cart</button>
    </>
  );
}
