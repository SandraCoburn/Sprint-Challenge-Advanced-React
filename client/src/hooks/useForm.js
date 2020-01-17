import { useLocalStorage } from "./useLocalStorage";

export const useForm = (key, initialValue) => {
  const [values, setValues] = useLocalStorage(key, initialValue);
  const handleChanges = e => {
    console.log("target value", e.target.name);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const clearForm = e => {
    // e.preventDefault();
    setValues(initialValue);
  };
  return [values, handleChanges, clearForm];
};
