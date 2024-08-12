export default function updateUniqueItems(task) {
  if (typeof task !== 'object' || task === null || !(task instanceof Map)) {
    throw Error('Cannot process');
  }

  task.forEach((value, key) => {
    if (value === 1) {
      task.set(key, 100);
    }
  });
  return task;
}
