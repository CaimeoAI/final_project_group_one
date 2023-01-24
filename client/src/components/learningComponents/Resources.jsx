import React from "react";
import { useState, useEffect } from "react";

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://web-dev-resources/api")
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
          <div key={resource.id}>
            <h1 className="">{resource.name}</h1>

            <a
              className="my-6 bg-accent-secondary  text-text-primary px-6 mt-12 py-2  hover:bg-active"
              target="_blank"
              rel="noreferrer"
              href={resource.url}
            >
              Start the quiz
            </a>
            <p>{resource.start_time}</p>
            <p>{resource.end_time}</p>
            <p className="mb-2">duration:{resource.duration}</p>
          </div>
        ))}
    </div>
  );
}
