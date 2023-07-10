import Select from 'react-select';
import { GenreData } from '../../pages/games';

export type SelectInputProps = {
  id: string;
  options: any;
  // options: Array<GenreData>;
  placeholder: string;
  value?: any;
  onChange?: any;
}

export type SelectOptions = {
  value: string,
  label: string
}

export default function SelectInput({ id, options, placeholder, value, onChange }: SelectInputProps) {

  return (
    <div className='selectInput'>
      <Select
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        id={id}
        value={value}
      />
    </div>
  );
}