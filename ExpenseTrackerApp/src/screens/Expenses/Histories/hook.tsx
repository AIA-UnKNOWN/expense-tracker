import { useState } from 'react';

const sampleHistories = [
  {
    id: 1,
    label: 'Item 1',
    amount: -400,
  },
  {
    id: 2,
    label: 'Item 1',
    amount: -400,
  },
  {
    id: 3,
    label: 'Item 1',
    amount: -400,
  },
];

const useHistories = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [histories, setHistories] = useState([...sampleHistories]);

  return { isLoading, histories }
}

export default useHistories;