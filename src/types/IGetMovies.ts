export interface IMovie {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Type: string;
}

export interface IGetMovies {
    Search: IMovie[];
    totalResults: string;
    Response: string;
}
