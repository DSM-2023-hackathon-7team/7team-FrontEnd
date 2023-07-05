import { useState } from "react";

export const useForm = (initial) => {
  const [state, setState] = useState(initial);

  const onHandleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  return {
    state,
    setState,
    onHandleChange,
  };
};
