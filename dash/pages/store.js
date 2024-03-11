import Layout from "../components/layout";
import CardProduct from "@/components/CardProduct";
import Pagination from "@/components/Pagination";

import lockPagination from "@/helpers";

export default function Store({products}) {

  const { currentPage, paginate, postsPerPage } = lockPagination(products, '/store', 10);
  
  return (
    <>
      <Layout
        title="Store"
        description="Desde Store"
      >
        <div className="relative text-center">
          <h2 className="text-white font-bold mb-10 text-6xl">Products</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-4">

          {products
              .slice(
                (currentPage - 1) * postsPerPage,
                currentPage * postsPerPage
              )
              .map((product) => (
                <CardProduct 
                  key={product.id} 
                  product={product}
                />
              ))}
          </ul>
          <div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={products.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          </div>
        </div>
      </Layout>
    </>  
  );
}

export async function getStaticProps() {
  const postsAnswer = await fetch(`${process.env.API_URL}/posts`)
  const photosAnswer = await fetch(`${process.env.API_URL}/photos`)

  const [posts, photos] = await Promise.all([
    postsAnswer.json(),
    photosAnswer.json()

  ]);
  
  const products = posts.map(post => ({
    ...post,
    thumbnailUrl: photos.find(photo => photo.id === post.id)?.thumbnailUrl
  }));

  return {
    props: {
      products
    }
  }
}