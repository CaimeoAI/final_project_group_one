import Box from "@mui/material/Box";

import Grid from "@mui/material/Unstable_Grid2";
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
    <Box sx={{ flexGrow: 2 }} className=" ">
      <h1 className=" text-4xl py-8">Frontend</h1>
      {/* FRONTEND Grid */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12, lg: 3 }}
        rows={{ xs: 2, sm: 8, md: 12, lg: 3 }}
        className=" grid-rows-1  grid-flow-row "
      >
        <Grid>
          <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {courses &&
              courses.map((courses) => (
                <div key={courses.type}>
                  <h1 className=" text-2xl text-orange-300 ">
                    {courses.title}
                  </h1>
                  <p>{courses.description}</p>
                  <button className="my-6 bg-accent-secondary  text-text-primary mt-12 px-6 py-2  hover:bg-active">
                    Start course
                  </button>
                </div>
              ))}
          </div>
        </Grid>
      </Grid>

      <h1 className=" text-4xl py-8 ">Backend</h1>
      {/* BACKEND Grid */}

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
        className=" grid-rows-1  grid-flow-row "
      >
        <Grid xs={2} sm={3} md={3}>
          {
            <div className=" text-text-primary">
              <h1 className=" text-2xl text-orange-300 ">Node.Js </h1>
              <p>
                Lorem ipsum dolor sit amet orem doloremque incidunt eveniet
                ducimus sint. Quibusdam, tempora! Eaque quos earum iusto?
              </p>
              <button className="my-6 bg-accent-secondary  text-text-primary mt-12 px-6 py-2  hover:bg-active">
                See more
              </button>
            </div>
          }
        </Grid>
      </Grid>
    </Box>
  );
}
