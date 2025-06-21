import { IoIosSearch } from "react-icons/io";

export default function Navbar({ propiedad }) {
    return (
        <header className="flex py-5 justify-between items-center bg-black text-white px-10">
            <figure>
                LOGO
            </figure>
            <nav>
                <ul className="flex gap-5">
                    <li>favoritos</li>
                    <li>accion</li>
                    <li>terror</li>
                    <li>comedia</li>
                </ul>
            </nav>

            <div className="bg-white rounded-4xl flex items-center">
                <input
                    onChange={(e) => propiedad(e.target.value)}
                    placeholder="Buscar pelicula.."
                    type="text" className="bg-white focus:outline-0 rounded-4xl text-gray-700 py-2 px-5"
                />
                <IoIosSearch className="ms-[-36px]" fill="black" size={25} />
            </div>
        </header>
    )
}