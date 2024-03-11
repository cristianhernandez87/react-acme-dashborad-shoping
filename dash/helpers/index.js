import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function lockPagination(data, redirectPath, postsPerPage) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / postsPerPage);

  // Obtener el número de página actual de la URL al cargar la página
  useEffect(() => {
    const hash = parseInt(router.asPath.split("#")[1]);
    if (!isNaN(hash) && hash <= totalPages) {
      setCurrentPage(hash);
    } else {
      // Si el valor en la URL no es un número válido o excede el número total de páginas, redirigir a la ruta especificada
      router.push(redirectPath);
    }
  }, [router.asPath, totalPages, redirectPath]);

  // Función para cambiar la página actual
  const paginate = (pageNumber) => {
    // Verificar si pageNumber es mayor que totalPages
    if (pageNumber > totalPages) {
      // Redirigir a la ruta especificada
      router.push(redirectPath);
    } else {
      // Si pageNumber es válido, actualizar currentPage y la URL
      setCurrentPage(pageNumber);
      router.push(`${redirectPath}#${pageNumber}`, undefined, { shallow: true });
    }
  };

  return { currentPage, paginate, postsPerPage };
}

export default lockPagination;
