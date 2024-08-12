export default function getListStudents(task) {
  if (!Array.isArray(task)) {
    return [];
  }
  return task.map((item) => item.id);
}
