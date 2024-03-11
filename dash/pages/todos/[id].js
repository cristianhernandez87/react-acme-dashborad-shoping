// /pages/todos/[id].js
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import PrevNext from "@/components/PrevNext";

export default function Post({ post }) {
  const { id } = useRouter().query
  const { title, userId } = post

  return (
    <>
      <Layout
            title={`Post || ${id}`}
            description={title}
        >
            <div className="w-full lg:my-7 text-center">
                <h2 className="text-2xl font-bold mb-4">{title} // {id}</h2>
                <div className="mb-5">
                    <p className="text-white">{userId}</p>
                </div>

                <PrevNext
                  type="blog"
                  page="todos"
                  id={id}
                />
            </div>
        </Layout>
    </>
  )
}


export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  try {

    const answer =  await fetch(`${process.env.API_URL}/todos/${id}`)
    const post = await answer.json()

    return {
      props: {
        post
      },
    };
  } catch (error) {
    console.error("Error fetching post:", error);
    return {
      props: {
        post: null
      },
    };
  }
}