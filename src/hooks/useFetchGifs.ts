import { IGifs } from "../interfaces/gif.ts";
import { useImmer } from "use-immer";
import useAsyncEffect from "use-async-effect";
import { getGifs } from "../helpers/getGifs.ts";

export const useFetchGifs = (
  category: string,
): { isLoading: boolean; gifs: IGifs[] } => {
  const [gifs, setGifs] = useImmer<IGifs[]>([]);
  const [isLoading, setIsLoading] = useImmer<boolean>(true);

  useAsyncEffect(async () => {
    const gifs: IGifs[] = await getGifs(category);
    setGifs(gifs);
    setIsLoading(false);
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};
