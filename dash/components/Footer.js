import MainMenu from "./MainMenu";

export default function Footer() {
  return (
    <footer className="text-center p-6 mt-auto w-full text-center border border-white border-x-0 border-b-0">
        <MainMenu
            areaClasses="border border-yellow-500 border-x-0 border-t-0 text-yellow-500"
            flexClass="flex-col lg:flex-row"
            itemClass="mb-8 lg:mb-0"
        ></MainMenu>
    </footer>
  )
}
