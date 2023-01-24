import { useState, useEffect } from "react";
import axios from "axios";

export default function ResponsiveGrid() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BE_URL}/classes/type`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("response", response);
        setCourses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  console.log("courses", courses);

  return (
    <div>
      <h1 className=" text-4xl pb-12">Your Recommended Courses</h1>

      <div className="mb-12">
        {loading && <p>Loading...</p>}
        {error && <p>{error.message}</p>}
        {courses &&
          courses.map((courses) => (
            <div className="ml-4 mb-12 md:w-[50%]" key={courses.type}>
              <h1 className=" text-xl text-orange-300 mb-3 ">
                {courses.title}
              </h1>
              <p>{courses.description}</p>
              <button className="my-2 bg-accent-secondary text-text-primary mt-8 px-6 py-2  hover:bg-active shadow-text-secondary shadow-md">
                Start course
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
