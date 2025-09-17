import type { IMovieCard } from "./IMovieCard"

export const MovieCard
    = ({ title, src, alt, year }: IMovieCard) => {
        return (
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="p-2 rounded-lg font-bold">{title}</h2>
                <img className="rounded-2xl cursor-pointer" src={src} alt={alt} height='200' />
                <p>{year}</p>
            </div>
        )
    }
