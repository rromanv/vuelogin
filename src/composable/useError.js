import { ref } from "vue";

const useError = () => {
  const error = ref(null);
  const setError = (value) => {
    error.value = value;
  };
  return { error, setError };
};

export default useError;
