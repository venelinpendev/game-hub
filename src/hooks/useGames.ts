import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number,
  name: string,
  slug: string,
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[] // an array of objects that contain a Platform
  metacritic: number;
}

interface GetGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<GetGamesResponse>("/games", {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message)
        setLoading(false);
      });
      // TODO add setLoading(false); in .finally() when building code for deployment

    return () => {controller.abort()}
  }, []);

  return {games, error, isLoading};
}

export default useGames;