// MainMenu
import { usePathname } from 'next/navigation'
import Link from "next/link";
import clsx from 'clsx';


export default function MainMenu({areaClasses, flexClass, itemClass}) {

    const pathname = usePathname()

    const isTodosPage = /^\/todos\/\d+$/.test(pathname);
    const isProductPage = /^\/products\/\d+$/.test(pathname);

    return (
        <ul className={`flex ${flexClass}`}>
            <li className={itemClass}>
                <Link href="/">
                    <span 
                        className={clsx(
                            'p-3 hover:bg-yellow-300 hover:text-black transition-all duration-200',
                            {
                                [areaClasses]: pathname === '/',
                            }
                        )}
                    >Home</span>
                </Link>
            </li>
            <li>
                <Link href="/dashboard">
                    <span 
                        className={clsx(
                            'p-3 hover:bg-yellow-300 hover:text-black transition-all duration-200',
                            {
                                [areaClasses]: pathname === '/dashboard',
                            }
                        )}
                    >Dashboard</span>
                </Link>
            </li>
            <li>
                <Link href="/us">
                    <span 
                        className={clsx(
                            'p-3 hover:bg-yellow-300 hover:text-black transition-all duration-200',
                            {
                                [areaClasses]: pathname === '/us',
                            }
                        )}
                    >About Us</span>
                </Link>
            </li>
            <li>
                <Link href="/store">
                    <span 
                        className={clsx(
                            'p-3 hover:bg-yellow-300 hover:text-black transition-all duration-200',
                            {
                                [areaClasses]: pathname === '/store' || isProductPage,
                            }
                        )}
                    >Store</span>
                </Link>
            </li>
            <li>
                <Link href="/blog">
                    <span 
                        className={clsx(
                            'p-3 hover:bg-yellow-300 hover:text-black transition-all duration-200',
                            {
                                [areaClasses]: pathname === '/blog' || isTodosPage,
                            }
                        )}
                    >Blog</span>
                </Link>
            </li>
        </ul>
    )
}
