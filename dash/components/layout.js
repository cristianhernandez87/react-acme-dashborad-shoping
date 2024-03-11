import Head from "next/head";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";

export default function Layout({children, title, description}) {
  return (
    <>
        <Head>
            <title>{`ACME || ${title}`}</title>
            <meta name="description" content={description}/>
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-start lg:p-24 pt-24 lg:pt-2">
            <div className="z-10 w-full items-center justify-between font-mono text-sm mb-6 lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                ACME Dashboard || <strong className="ml-2">{title}</strong>
                </p>
                <MainMenu
                    areaClasses="bg-yellow-300 text-black"
                ></MainMenu>
            </div>
            {children}
            <Footer></Footer>
        </main>
    </>
  )
}
