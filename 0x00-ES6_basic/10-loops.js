export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const idx of array) {
    const value = idx;
    newArray.push(value + appendString);
  }

  return newArray;
}
