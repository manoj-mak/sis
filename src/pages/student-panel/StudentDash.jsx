import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "../../components/TopBar";

const StudentDash = () => {
  const navigate = useNavigate();

  const userData = {
    name: "John Doe",
    email: "JohnDoe@gmail.com",
    rollNo: "123456789",
    branch: "CSE",
    semester: "3",
    section: "A",
  };

  const attendanceData = [
    {
      id: 1,
      subject: "Maths",
      classesTaken: 30,
      classesAttended: 23,
      classesTotal: 60,
    },
    {
      id: 2,
      subject: "Physics",
      classesTaken: 30,
      classesAttended: 28,
      classesTotal: 60,
    },
    {
      id: 3,
      subject: "Chemistry",
      classesTaken: 30,
      classesAttended: 7,
      classesTotal: 60,
    },
    {
      id: 4,
      subject: "Biology",
      classesTaken: 30,
      classesAttended: 20,
      classesTotal: 60,
    },
    {
      id: 5,
      subject: "English",
      classesTaken: 30,
      classesAttended: 30,
      classesTotal: 60,
    },
    {
      id: 7,
      subject: "History",
      classesTaken: 30,
      classesAttended: 29,
      classesTotal: 60,
    },
    {
      id: 8,
      subject: "Geography",
      classesTaken: 30,
      classesAttended: 12,
      classesTotal: 60,
    },
    {
      id: 9,
      subject: "Civics",
      classesTaken: 30,
      classesAttended: 26,
      classesTotal: 60,
    },
    {
      id: 10,
      subject: "Economics",
      classesTaken: 30,
      classesAttended: 27,
      classesTotal: 60,
    },
  ];

  const timetableData = {
    Monday: [
      {
        id: 1,
        subject: "Maths",
        startTime: "10:00",
        endTime: "11:00",
      },
      {
        id: 2,
        subject: "Physics",
        startTime: "11:00",
        endTime: "12:00",
      },
      {
        id: 3,
        subject: "Chemistry",
        startTime: "12:00",
        endTime: "13:00",
      },
      {
        id: 4,
        subject: "Biology",
        startTime: "13:00",
        endTime: "14:00",
      },
      {
        id: 5,
        subject: "English",
        startTime: "14:00",
        endTime: "15:00",
      },
    ],
    Tuesday: [
      {
        id: 1,
        subject: "Maths",
        startTime: "10:00",
        endTime: "11:00",
      },
      {
        id: 2,
        subject: "Physics",
        startTime: "11:00",
        endTime: "12:00",
      },
      {
        id: 3,
        subject: "Chemistry",
        startTime: "12:00",
        endTime: "13:00",
      },
      {
        id: 4,
        subject: "Biology",
        startTime: "13:00",
        endTime: "14:00",
      },
      {
        id: 5,
        subject: "English",
        startTime: "14:00",
        endTime: "15:00",
      },
    ],
    Wednesday: [
      {
        id: 1,
        subject: "Maths",
        startTime: "10:00",
        endTime: "11:00",
      },
      {
        id: 2,
        subject: "Physics",
        startTime: "11:00",
        endTime: "12:00",
      },
      {
        id: 3,
        subject: "Chemistry",
        startTime: "12:00",
        endTime: "13:00",
      },
      {
        id: 4,
        subject: "Biology",
        startTime: "13:00",
        endTime: "14:00",
      },
      {
        id: 5,
        subject: "English",
        startTime: "14:00",
        endTime: "15:00",
      },
    ],
    Thursday: [
      {
        id: 1,
        subject: "Maths",
        startTime: "10:00",
        endTime: "11:00",
      },
      {
        id: 2,
        subject: "Physics",
        startTime: "11:00",
        endTime: "12:00",
      },
      {
        id: 3,
        subject: "Chemistry",
        startTime: "12:00",
        endTime: "13:00",
      },
      {
        id: 4,
        subject: "Biology",
        startTime: "13:00",
        endTime: "14:00",
      },
      {
        id: 5,
        subject: "English",
        startTime: "14:00",
        endTime: "15:00",
      },
    ],
    Friday: [
      {
        id: 1,
        subject: "Maths",
        startTime: "10:00",
        endTime: "11:00",
      },
      {
        id: 2,
        subject: "Physics",
        startTime: "11:00",
        endTime: "12:00",
      },
      {
        id: 3,
        subject: "Chemistry",
        startTime: "12:00",
        endTime: "13:00",
      },
      {
        id: 4,
        subject: "Biology",
        startTime: "13:00",
        endTime: "14:00",
      },
      {
        id: 5,
        subject: "English",
        startTime: "14:00",
        endTime: "15:00",
      },
    ],
  };

  const upcomingEventsData = [
    {
      id: 1,
      title: "Coke Studio",
      date: "20-12-2023",
      time: "12:00",
      eventType: "Cultural",
      eventDescription: "Coke Studio is a musical event",
      eventPlace: "Auditorium",
    },
    {
      id: 1,
      title: "Physics Quiz",
      date: "22-12-2023",
      time: "2:00",
      eventType: "Cultural",
      eventDescription: "Physics Quiz",
      eventPlace: "Auditorium",
    },
  ];

  const upcomingExamsData = [
    {
      id: 1,
      title: "MTE Maths",
      date: "18-12-2023",
      time: "1:00",
      eventType: "Exam",
      eventDescription: "Maths Mid Semester Exam",
      eventPlace: "Room 101",
    },
    {
      id: 1,
      title: "MTE Physics",
      date: "22-12-2023",
      time: "2:00",
      eventType: "Exam",
      eventDescription: "Physics Quiz",
      eventPlace: "Room 102",
    },
    {
      id: 1,
      title: "MTE Chemistry",
      date: "24-12-2023",
      time: "2:00",
      eventType: "Exam",
      eventDescription: "Chemistry Quiz",
      eventPlace: "Room 103",
    },
  ];

  const resultData = {
    mathsResult: {
      score: 80,
      total: 100,
    },
    physicsResult: {
      score: 70,
      total: 100,
    },
    chemistryResult: {
      score: 90,
      total: 100,
    },
    biologyResult: {
      score: 60,
      total: 100,
    },
  };

  return (
    <div>
      <TopBar />
      <div
        className="Dashboard-container"
        style={styles.dashBoardContainer}
      ></div>
    </div>
  );
};

const styles = {
  dashBoardContainer: {
    display: "flex",
    backgroundColor: "#1e1e1e",
    width: "100%",
    height: "100vh",
  },
  dashBoardContent: {
    padding: "20%",
    width: "100%",
    height: "100%",
    backgroundColor: "#1e1e1e",
  },
  dashBoardContentHeader: {
    height: "100px",
    backgroundColor: "#1e1e1e",
    borderBottom: "1px solid #80D7CE",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export default StudentDash;
