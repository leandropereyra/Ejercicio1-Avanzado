import { useState } from "react";

const useList = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  // Push new value to list
  const push = (element) => {
    setValue((oldValue) => [...oldValue, element]);
  };

  // Remove value from list
  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  //Clear list
  const clear = () => {
    setValue([]);
  };

  //Order list
  const order = () => {
    setValue([...value].sort());
  };

  //Reverse Order list
  const reverseOrder = () => {
    setValue([...value].reverse());
  };

  // List is Empty ? true / false
  const isEmpty = () => value.length === 0;

  // TODO:Develop more functions for lists

  return {
    value,
    setValue,
    push,
    remove,
    isEmpty,
    clear,
    order,
    reverseOrder,
  };
};

export default useList;
