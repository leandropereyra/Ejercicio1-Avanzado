import { useState } from "react";

const useList = (initialValue = []) => {
  const [value, setValue] = useState(initialValue);

  // Push new value to list
  const push = (task) => {
    setValue((oldValue) => [...oldValue, { id: oldValue.length, task }]);
  };

  // Remove value from list
  const remove = (index) => {
    setValue((oldValue) => oldValue.filter((_, i) => i !== index));
  };

  //Clear list
  const clear = () => {
    setValue([]);
  };

  //Alphabetical order
  const order = () => {
    setValue(
      [...value].sort((first, second) => {
        return first.task > second.task ? 1 : -1;
      })
    );
  };

  //Order by ID
  const orderById = () => {
    setValue(
      [...value].sort((first, second) => {
        return first.id > second.id ? 1 : -1;
      })
    );
  };

  // List is Empty ? true / false
  const isEmpty = () => value.length === 0;

  return {
    value,
    setValue,
    push,
    remove,
    isEmpty,
    clear,
    order,
    orderById,
  };
};

export default useList;
