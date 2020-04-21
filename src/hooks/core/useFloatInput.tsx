import {ChangeEvent, FocusEvent, useState} from 'react';

function useFloatInput(initialValue: number | string) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    setValue(parseFloat(e.target.value));
  }

  return {
    value,
    getFloat: () => parseFloat(value as string),
    onChange: handleChange,
    onBlur: handleBlur,
  };
}

export default useFloatInput;
