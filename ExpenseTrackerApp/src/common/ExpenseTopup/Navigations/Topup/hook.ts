import { useState } from 'react';

const useTopup = () => {
  const [amount, setAmount] = useState("0");

  const topup = async () => {
    console.log({ amount: parseInt(amount) })
  }

  return { amount, setAmount, topup }
}

export default useTopup;