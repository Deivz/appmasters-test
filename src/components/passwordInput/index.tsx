import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { PasswordInputContainer } from './PasswordInput.styles';
import { InputContainer } from '../../styles/components/Input.styles';

interface PasswordInputProps {
  label: string;
  id: string;
  placeholder: string;
  value: string;
  onChange: (event: string) => void;
}

export default function PasswordInput({ label, id, placeholder, onChange, value }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleVisibility() {
    setShowPassword(showPassword ? false : true);
  }

  return (
    <InputContainer>
      <label htmlFor={id} className='label'>{label}</label>
      <PasswordInputContainer>
        <input
          type={showPassword ? 'text' : 'password'}
          name={id}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <i className='icon' onClick={toggleVisibility}>{showPassword ? <FaEye /> : <FaEyeSlash />}</i>
      </PasswordInputContainer>
    </InputContainer>
  );
}