import { ReactElement } from "react";
import { GifItem } from "./GifItem.tsx";
import { IGifs } from "../interfaces/gif.ts";
import { useFetchGifs } from "../hooks/useFetchGifs.ts";

interface GifGridProps {
  category: string;
}

export const GifGrid = ({ category }: GifGridProps): ReactElement => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="card-grid">
          {gifs.map((gif: IGifs) => (
            <GifItem key={gif.id} {...gif} />
          ))}
        </div>
      )}
    </>
  );
};
