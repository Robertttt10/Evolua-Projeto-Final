import { TextField, TextFieldProps } from '@mui/material'
import { useField } from "@unform/core"
import { useEffect, useState } from 'react';

type TCTextFieldProps = TextFieldProps & {
  name: string;
}

export const CTextField: React.FC<TCTextFieldProps> = ({ name, ...rest }) => {

  const { fieldName, registerField, defaultValue, error, clearError } = useField(name);

  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    });
  }, [fieldName, registerField, value]);

  return (
    <TextField
      {...rest}

      value={value}
      onChange={e => setValue(e.target.value)}
    />
  )
}