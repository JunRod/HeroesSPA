import { useState } from "react";

export const useForm = (initalForm = {}) => {
  const [formState, setFormState] = useState(initalForm);

  const onInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onInputReset = () => {
    setFormState(initalForm);
  };

  return {
    ...formState,
    formState,
    onInputReset,
    onInputChange,
  };
};
