import { IGifs, IGiphy } from "../interfaces/gif.ts";

export const getGifs = async (category: string): Promise<IGifs[]> => {
  const url: string = `https://api.giphy.com/v1/gifs/search?api_key=13gjxTeeD77oXyYgCJXl5mRlWlscaac4&q=${category}&limit=20`;
  const res: Response = await fetch(url);
  const { data } = await res.json();

  const gifs: IGifs[] = data.map(
    (gif: IGiphy): IGifs => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    }),
  );

  return gifs;
};
