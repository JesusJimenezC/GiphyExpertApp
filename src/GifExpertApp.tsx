import { ReactElement } from "react";
import { useImmer } from "use-immer";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = (): ReactElement => {
  const [categories, setCategories] = useImmer<string[]>([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  const onAddCategory = (category: string): void => {
    if (categories.includes(category)) return;
    setCategories((draft: string[]) => {
      draft.unshift(category);
    });
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      <ol>
        {categories.map((category: string) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};
