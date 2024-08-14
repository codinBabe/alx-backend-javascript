// create and export a constant cpp for Cpp Subjects
// create and export a constant java for Java Subjects
// create and export a constant react for React Subjects
// create and export one Teacher object cTeacher with experienceTeachingC = 10
// for Cpp subject, log to the console C++, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher and print the strings they return
// for Java subject, log to the console Java, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return
// for React subject, log to the console React, set cTeacher as the teacher, call the two methods getRequirements and getAvailableTeacher, and print the strings they return

const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// For Cpp subject
console.log("C++");
Subjects.cpp.setTeacher(cTeacher);
console.log(Subjects.cpp.getRequirements());
console.log(Subjects.cpp.getAvailableTeacher());

// For Java subject
console.log("Java");
Subjects.java.setTeacher(cTeacher);
console.log(Subjects.java.getRequirements());
console.log(Subjects.java.getAvailableTeacher());

// For React subject
console.log("React");
Subjects.react.setTeacher(cTeacher);
console.log(Subjects.react.getRequirements());
console.log(Subjects.react.getAvailableTeacher());
