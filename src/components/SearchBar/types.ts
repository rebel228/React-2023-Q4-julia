export type SearchBarPropsType = {
  search: (word?: string, page?: number) => void;
  setWord: React.Dispatch<React.SetStateAction<string>>;
  word: string;
};
