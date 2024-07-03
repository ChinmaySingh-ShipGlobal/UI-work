import { ADD_INPUT_DATA } from "./constants";

export const addInputData = (fieldName: string, value: string) => ({
  type: ADD_INPUT_DATA,
  payload: { fieldName, value },
});
