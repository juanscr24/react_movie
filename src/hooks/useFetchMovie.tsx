import { useEffect, useState } from "react";
import type { IGetMovies } from '../types/IGetMovies';
import { apiMovies } from "../services/apiMovie";

export const useGetMovies = (type: string) => {
    const [data, setData] = useState<IGetMovies | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!type) return;
        let cancel: boolean = false
        const fetchMovies = async () => {
            try {
                setLoading(true)
                const response = await apiMovies.get<IGetMovies>('', {
                    params: {
                        apikey: '84cd5118',
                        s: type
                    }
                })
                if (!cancel)
                    setData(response.data)
            } catch (error: any) {
                if (!cancel)
                    setError(error.error)
            } finally {
                if (!cancel)
                    setLoading(false)
            }
        }
        fetchMovies()

        return () => {
            cancel = true;
        };
    }, [type]
    );

    return {
        data,
        loading,
        error
    }
}