


import Course from "./Course";

const App = () => 
{
  const course = [
    {
      name: "HALF STACK APPLICATION DEVLOPMENT",
      id: 2,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using Props to Pass Data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a Component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (

    <div>
      {course.map((course) => (
        <Course course={course} key={course.id} />
      ))}
    </div>
  );
};

export default App;