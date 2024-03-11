import Link from "next/link";

export default function CardPost({post}) {
    const { id, title } = post;

  return (
    <li className="h-auto max-w-full px-2 mb-4">
        <div className="wrapper p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full flex flex-wrap">
            <Link href={`/todos/${id}`}>
                <span>{title}</span>
            </Link>
        </div>
    </li>
  )
}
