interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 28,
  location: "Los Angeles",
};

const studentsList: Student[] = [student1, student2];

const tableBody = document.querySelector(
  "#studentsTable tbody"
) as HTMLTableSectionElement;

if (tableBody) {
  tableBody.innerHTML = "";
  studentsList.forEach((student) => {
    const row = tableBody.insertRow();
    const firstName = row.insertCell(0);
    const location = row.insertCell(1);

    firstName.textContent = student.firstName;
    location.textContent = student.location;
  });
} else {
  console.error("Table body not found!");
}
