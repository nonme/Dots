export const removeFromList = <Type>(
  list: Array<Type>,
  index: number
): [removed: Type, result: Array<Type>] => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

export const addToList = <Type>(
  list: Array<Type>,
  index: number,
  element: Type
): Array<Type> => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};
