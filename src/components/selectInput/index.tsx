import Select from 'react-select';
import { GenreData } from '../../pages/games';
import { SelectInputContainer } from './SelectInput.styles';

export type SelectInputProps = {
  id: string;
  options: Array<GenreData> | undefined;
  placeholder: string;
  value: GenreData;
  onChange: any;
}

export type SelectOptions = {
  value: string,
  label: string
}

export default function SelectInput({ id, options, placeholder, value, onChange }: SelectInputProps) {
  return (
    <SelectInputContainer>
      <Select
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        id={id}
        value={value}
      />
      <span className='clear' onClick={() => onChange({value: 0, label: 'Filtros'})}>X</span>
    </SelectInputContainer>
  );
}