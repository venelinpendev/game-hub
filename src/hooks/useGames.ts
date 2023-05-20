import useData from "./useData";

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

const useGames = (selectedGenreId?: number) => useData<Game>("/games", {params: {genres: selectedGenreId}}, [selectedGenreId]);

export default useGames;