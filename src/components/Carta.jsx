export default function Carta({ imagen, titulo }) {
    return (
        <div
            className="w-[25%] bg-black text-[#FF8E04] flex flex-col items-center justify-center"
        >
            <img
                className="h-[70vh] w-[30vw] object-cover"
                src={imagen}
                alt=""
            />
            <p>{titulo}</p>
        </div>
    )
}