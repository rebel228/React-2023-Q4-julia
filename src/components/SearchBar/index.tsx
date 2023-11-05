import { SearchBarPropsType } from './types';
import { useNavigate } from 'react-router-dom';

export default function SearchBar(props: SearchBarPropsType) {
  const { search, setWord, word } = props;
  const navigate = useNavigate();

  return (
    <div className="top">
      <input
        value={word}
        className="input"
        placeholder="search..."
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button
        className="button"
        onClick={() => {
          navigate('/1');
          search();
        }}
      >
        <img className="img-search" src="/loupe.svg" />
      </button>
    </div>
  );
}
