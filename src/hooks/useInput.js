import { useState } from 'react';

export default function useInput(initValue, ysc) {
  const [value, setValue] = useState(initValue);
  const onChange = (e) => {
    if (e.currentTarget.value.length < ysc) {
      setValue(e.currentTarget.value);
    } 
  };
  return {
    value, onChange, setValue
  };
}
