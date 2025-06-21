import { useParams } from "react-router"
import { BASE_URL, options } from "../../constants";
import { useEffect, useState } from "react";
import './styles.css'


export default function MoviePage() {

    let params = useParams();

    const obtenerPeli = async () => {
        const response = await fetch(`${BASE_URL}/${params.id}?language=es-ES`, options);
        const datos = await response.json();
        console.log(datos);
        setPelicula(datos);
    }

    const [pelicula, setPelicula] = useState()

    useEffect(() => {
        obtenerPeli();
    }, []);

    return (
        <div className="bg-black text-white h-screen">
            {
                pelicula && (
                    <>
                        <div className="relative flex items-center gap-10">

                            <div className="backdrop absolute w-full h-full bg-gradient-to-t from-sky-500 backdrop-blur-xs to-indigo-500">
                                <img className="w-screen h-full object-cover" src={`https://image.tmdb.org/t/p/w500/${pelicula.backdrop_path}`} alt="" />
                            </div>


                            <div className="relative z-10">
                                <img className="w-48" src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt="" />
                            </div>

                            {/* Título de la película */}
                            <div className="relative z-10">
                                <h2 className="text-white text-4xl font-bold">{pelicula.title}</h2>
                                <div className="flex gap-5 mt-5">
                                    {
                                        pelicula.genres.map(
                                            (elemento) => (
                                                <div className="bg-orange-500 p-3 rounded-3xl">
                                                    {elemento.name}
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 px-10">
                            <p>
                                {pelicula.overview}
                            </p>
                        </div>
                    </>
                )
            }
        </div>
    )
}

