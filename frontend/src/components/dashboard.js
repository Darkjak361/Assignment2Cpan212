import React, { useEffect, useState } from "react";
import StudentList from "./StudentList";
import CourseList from "./CourseList";
import AddStudent from "./AddStudent";
import AddCourse from "./AddCourse";
import axios from "axios";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const fetchStudents = () => {
    axios
      .get("http://localhost:5000/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  };

  const fetchCourses = () => {
    axios
      .get("http://localhost:5000/courses")
      .then((response) => setCourses(response.data))
      .catch((error) => console.error("Error fetching courses:", error));
  };

  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Students and Courses</h1>
      <StudentList students={students} updateStudents={fetchStudents} />
      <CourseList courses={courses} updateCourses={fetchCourses} />
      <AddStudent updateStudents={fetchStudents} />
      <AddCourse updateCourses={fetchCourses} />
    </div>
  );
};

export default Dashboard;
