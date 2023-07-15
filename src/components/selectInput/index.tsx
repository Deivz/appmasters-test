import Select from 'react-select';
import { GenreData } from '../../pages/games';
import { SelectInputContainer } from './SelectInput.styles';
import { useEffect } from 'react';

export type SelectInputProps = {
  id: string;
  options: Array<GenreData> | undefined;
  placeholder: string;
  value: GenreData[];
  onChange: any;
  filtersArray: React.Dispatch<React.SetStateAction<string[]>>;
}

export type SelectOptions = {
  value: string,
  label: string
}

export default function SelectInput({ id, options, placeholder, value, onChange, filtersArray }: SelectInputProps) {

  useEffect(() =>{
    const labels = value.map((game: GenreData) => game.label);
    filtersArray([...labels]);
  }, [value])

  return (
    <SelectInputContainer>
      <Select
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        id={id}
        value={value}
        isMulti
      />
    </SelectInputContainer>
  );
}