import { MovieCard } from "../components/movieCard";
import { useGetMovies } from "../hooks/useFetchMovie";


const Series = () => {
    const { data, loading, error } = useGetMovies('serie');
    return (
        <div className="mt-2 flex flex-col justify-center items-center gap-5">
            <h1 className="text-2xl font-bold">Películas</h1>
            {loading && <p>Cargando ...</p>}
            {error && <p>Error:{error}</p>}
            {!loading && data && data.Search && (
                <div className="grid max-[350px]:grid-cols-1 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
                    {data.Search.map((movie, index) => (
                        <MovieCard key={index} alt={movie.Title} src={movie.Poster} title={movie.Title} year={movie.Year} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Series
