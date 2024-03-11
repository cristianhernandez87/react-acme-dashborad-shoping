import Link from "next/link";
import Image from "next/image";

export default function CardProduct({product}) {
    const { id, title, thumbnailUrl } = product;

    return (
        <>
        <li className="h-auto max-w-full px-2 mb-4">
            <div className="wrapper p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-wrap">
                <Link 
                  href={`/products/${id}`}
                  className="w-full"
                  passHref
                >
                    <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Link>
                <div className="px-3 mb-6">
                    <Image src={thumbnailUrl} width={500} height={300} alt={title} />
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <Link 
                  href={`/products/${id}`}
                  className="mt-auto mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  passHref
                >
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </li>
    </>
    )
}
