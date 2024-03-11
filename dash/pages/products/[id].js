
import Image from "next/image";
import Layout from "../../components/layout";
import PrevNext from "@/components/PrevNext";

export default function Product({product}) {
    
    const { body, id, thumbnailUrl, title, userId } = product
    
    return (
        <Layout
            title={`Products || ${title}`}
            description={title}
        >
            <div className="w-full lg:my-7">
                <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
                <div className="mb-5">
                    <p className="text-white">{body}</p>
                </div>
                <Image src={thumbnailUrl} width={500} height={300} alt={userId} className="mx-auto" />
            </div>

            <PrevNext
                type="store"
                page="products"
                id={id}
            />
        </Layout>
    )
}


export async function getServerSideProps(context) {

    const { params } = context; // Obtiene los parámetros de la URL, que incluyen el valor de `id`
    const { id } = params;

    try {
        
        // Obtener el post específico
        const postAnswer = await fetch(`${process.env.API_URL}/posts/${id}`);
        const post = await postAnswer.json();
    
        // Obtener la foto correspondiente al post
        const photoAnswer = await fetch(`${process.env.API_URL}/photos/${id}`);
        const photo = await photoAnswer.json();

        // Verificar si la imagen existe
        if (!photoAnswer.ok) {
            // Si la imagen no existe, redirigir a la página 404
            return {
                redirect: {
                    destination: '/404', // Página 404 personalizada
                    permanent: false,
                },
            };
        }
    
        // Combinar los datos del post y la foto
        const product = {
            ...post,
            thumbnailUrl: photo && photo.thumbnailUrl ? photo.thumbnailUrl : null
        };
    
        return {
            props: {
                product
            }
        }

    } catch (error) {
        console.error(error);
        return {
            notFound: true, // Devuelve una página 404
        };
    }

}