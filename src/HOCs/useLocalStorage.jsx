import { useState } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    const contacts = JSON.parse(localStorage.getItem(key));
    return contacts?.length > 0 ? contacts : defaultValue;
  });

  return [state, setState];
}
