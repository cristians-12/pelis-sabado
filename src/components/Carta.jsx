import * as motion from "motion/react-client"

export default function Carta({ imagen, titulo }) {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                scale: { type: "spring", bounce: 0.5 }
            }
        }
    };
    return (
        <motion.div
            variants={cardVariants}
            className="w-[25%] bg-black text-[#FF8E04] flex flex-col items-center justify-center"
        >
            <img
                className="h-[70vh] w-[30vw] object-cover"
                src={`https://image.tmdb.org/t/p/w500/${imagen}`}
                alt=""
            />
            <p>{titulo}</p>
        </motion.div>
    )
}