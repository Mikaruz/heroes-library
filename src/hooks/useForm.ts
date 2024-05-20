import { useState } from "react";

type FormState = Record<string, string>;

export const useForm = (initialForm: FormState = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
