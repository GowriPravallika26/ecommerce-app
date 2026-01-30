import prisma from "../lib/prisma";
import ProductCard from "../components/ProductCard";
import AuthButtons from "../components/AuthButtons";

export async function getServerSideProps({ query }) {
  const { q = "", page = 1 } = query;
  const take = 2;
  const skip = (page - 1) * take;

  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: q, mode: "insensitive" } },
        { description: { contains: q, mode: "insensitive" } }
      ]
    },
    skip,
    take
  });

  return { props: { products, page: Number(page) } };
}

export default function Home({ products, page }) {
  return (
    <>
      <AuthButtons />

      <input data-testid="search-input" />
      <button data-testid="search-button">Search</button>

      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}

      <a data-testid="pagination-prev" href={`/?page=${page - 1}`}>Previous</a>
      <a data-testid="pagination-next" href={`/?page=${page + 1}`}>Next</a>
    </>
  );
}
