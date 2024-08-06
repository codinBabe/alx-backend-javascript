// Write a function named createIteratorObject, that will take into argument a report Object created with the previous function createReportObject.
// This function will return an iterator to go through every employee in every department.

export default function createIteratorObject(report) {
  const values = Object.values(report);
  return {
    next() {
      const value = values.shift();
      return { done: !value, value };
    },
  };
}
