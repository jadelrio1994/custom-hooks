import React, { useState } from 'react'

export const useCounter = (initialState = 10) => {

  const [counter, seteCounter] = useState(initialState)

  const increment = () => {
    seteCounter(counter + 1);
  }

  const decrement = () => {
    seteCounter(counter - 1);
  }

  const reset = () => {
    seteCounter(initialState);
  }

  return {
    counter,
    increment,
    decrement,
    reset
  };
}