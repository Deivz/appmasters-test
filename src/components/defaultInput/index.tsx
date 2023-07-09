import { InputContainer } from "../../styles/components/Input.styles";

interface DefaultInputProps {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: string) => void;
}

export default function DefaultInput({ label, type, id, placeholder, onChange, value }: DefaultInputProps) {
  return (
    <InputContainer>
      <label htmlFor={id} className='label'>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </InputContainer>
  );
}