import { ChangeEvent, FormEvent, ReactElement } from "react";
import { useImmer } from "use-immer";

interface AddCategoryProps {
  onAddCategory: (category: string) => void;
}

export const AddCategory = ({
  onAddCategory,
}: AddCategoryProps): ReactElement => {
  const [inputValue, setInputValue] = useImmer<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const trimmedInput = inputValue.trim();

    if (!trimmedInput) return;

    onAddCategory(trimmedInput);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={handleInputChange}
        placeholder="Search Gif"
        type="text"
        value={inputValue}
      />
    </form>
  );
};
