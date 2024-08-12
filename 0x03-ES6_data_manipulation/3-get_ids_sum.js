export default function getStudentIdsSum(studentIds) {
  return studentIds.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
