import CardPost from "@/components/CardPost";
import Layout from "../components/layout";
import Pagination from "@/components/Pagination";
import lockPagination from "@/helpers";

export default function Blog({ blogPosts }) {
  
  const { currentPage, paginate, postsPerPage } = lockPagination(blogPosts, '/blog', 10);

  return (
    <>
      <Layout title="Blog" description="Desde Blog">
        <div className="relative text-center">
          <h2 className="text-white font-bold mb-10 text-6xl">Blog</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-4 mb-9">
            {blogPosts
              .slice(
                (currentPage - 1) * postsPerPage,
                currentPage * postsPerPage
              )
              .map((post) => (
                <CardPost key={post.id} post={post} />
              ))}
          </ul>
          <div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={blogPosts.length}
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
  try {
    const blogAnswers = await fetch(`${process.env.API_URL}/todos`);
    const blogPosts = await blogAnswers.json();

    return {
      props: {
        blogPosts,
      },
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return {
      props: {
        blogPosts: null,
      },
    };
  }
}
