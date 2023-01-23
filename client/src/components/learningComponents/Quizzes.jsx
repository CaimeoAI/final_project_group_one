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

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {resources &&
        resources.map((resource) => (
          <div key={resource.id} className="mb-12">
            <h1 className=" text-xl text-orange-300 mb-4 ">{resource.name}</h1>
            <div className="mt-6 mb-3 text-green-400">
              <p className=" text-red-300">Duration: </p>
              {Math.floor(resource.duration / 3600)} minutes
            </div>
            <div className="mb-6">
              <p className=" text-red-300">Starts on:</p>
              {resource.start_time}
            </div>
            <a
              target="_blank"
              rel="noreferrer"
              href={resource.url}
              className="my-6 bg-accent-secondary  text-text-primary mt-8 px-6 py-2  hover:bg-active"
            >
              Take the challenge
            </a>

            <hr className="mt-6" />
          </div>
        ))}
    </div>
  );
}
