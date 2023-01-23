import React from "react";
import { useState, useEffect } from "react";

export default function Quizzes() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://kontests.net/api/v1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResources(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  function msToTime(duration) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {resources &&
        resources.map((resource) => (
          <div key={resource.id} className="mb-4">
            <h1 className=" text-xl text-orange-300 mb-4 ">{resource.name}</h1>
            <p className="mt-6 mb-3">
              Duration:{Math.floor(resource.duration / 60)} minutes
            </p>
            <a
              target="_blank"
              rel="noreferrer"
              href={resource.url}
              className="my-6 bg-accent-secondary  text-text-primary mb-4 mt-12 px-6 py-2  hover:bg-active"
            >
              Take the challenge
            </a>
            {/* <p>{resource.start_time}</p>
            <p>{resource.end_time}</p> */}
            <hr />
          </div>
        ))}
    </div>
  );
}
