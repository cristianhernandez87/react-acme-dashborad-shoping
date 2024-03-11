
import Link from "next/link";
import Layout from "../components/layout";


export default function Page404() {
  return (
    <Layout
        title="ACME || 404"
        description="404"
    >   
        <div className="my-6">
            <p className="text-white text-center text-4xl font-bold mb-4">404</p>
            <Link href="/" className="text-center text-yellow-300">Back Home</Link>
        </div>
    </Layout>
  )
}
