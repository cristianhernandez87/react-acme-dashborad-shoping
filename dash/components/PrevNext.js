import Link from "next/link";

export default function PrevNext({id, type, page}) {

  const postIndex = id - 1;
  const postsPerPage = 10; 
  const currentPage = Math.ceil((postIndex + 1) / postsPerPage);

  const postId = parseInt(id);
  const postNext = postId + 1
  const postPrev = id - 1


  return (
    <div className="flex justify-between p-4 w-full">
      <Link href={`/${page}/${postPrev}/`}>Prev</Link>
      <Link href={`/${type}#${currentPage}/`}>Blog GRID</Link>
      <Link href={`/${page}/${postNext}/`}>Next</Link>
    </div>
  )
}
