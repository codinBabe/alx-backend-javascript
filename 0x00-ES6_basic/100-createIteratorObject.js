export default function createIteratorObject(report) {
  const Employees = [];
  for (const employee in report.allEmployees) {
    if (Object.prototype.hasOwnProperty.call(report.allEmployees, employee)) {
      Employees.push(...report.allEmployees[employee]);
    }
  }
  return Employees;
}
