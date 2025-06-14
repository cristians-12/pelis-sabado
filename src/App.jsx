import { useEffect, useState } from "react";
import Carta from "./components/Carta";
import Navbar from "./components/Navbar";
import { BASE_URL, options } from "./constants";
import Skeleton from "./components/Skeleton";

export default function App() {


  const peliculasIniciales = [
    {
      imagen: 'https://www.lavanguardia.com/peliculas-series/images/movie/poster/2025/4/w300/cGOBis1KNC8AkYMcOEw4lCycfD1.jpg',
      titulo: 'THUNDERBOLTS'
    },
    {
      imagen: 'https://lumiere-a.akamaihd.net/v1/images/image_68ea145b.jpeg?region=0%2C0%2C540%2C810&width=320',
      titulo: 'ELIO'
    },
    {
      titulo: 'AVATAR',
      imagen: 'https://hips.hearstapps.com/hmg-prod/images/avatar-66ca0a9027f05.jpg?crop=1xw:1xh;center,top&resize=980:*'
    }
  ]

  const [texto, setTexto] = useState('');
  const [peliculas, setPeliculas] = useState([])

  const obtenerPelis = async () => {
    const respuesta = await fetch(`${BASE_URL}/popular`, options);
    const datos = await respuesta.json();
    console.log(datos)
    const { results } = datos;
    setPeliculas(results)
  }

  useEffect(
    () => {
      obtenerPelis();
    }, []
  )

  if (peliculas.length == 0) {
    return (
      <div>
        <Navbar />
        <div className="flex pt-10 px-10 justify-between flex-wrap">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <section className="flex pt-10 px-10 justify-between flex-wrap">
        {
          peliculas.map(
            (elemento) => (
              <Carta imagen={elemento.poster_path} titulo={elemento.title} />
            )
          )
        }
      </section>
    </>
  )
}