import useSWR from "swr";
import fetcher from "./fetcher";

export const useGame = ({ id }) => {
  const { data, error } = useSWR(`/game/${id}`, fetcher);
  return {
    game: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};



export const useGames = () => {
  const { data, error } = useSWR("/games", fetcher);
  return {
    rooms: (data as any) || [],
    isLoading: !data && !error,
    isError: error,
  };
};