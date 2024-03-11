import Link from "next/link";

export default function Pagination({ postsPerPage, totalPosts, currentPage }) {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pt-5 border-t-gray-100 border-t mb-5">
            <ul className="inline-flex -space-x-px text-sm">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <Link
                            href={`#${number}`}
                            shallow>
                            <span className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === number ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-yellow-300' : ''}`}
                            >{number}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
