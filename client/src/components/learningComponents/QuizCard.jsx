import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";



export default function QuizCard() {
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
          <div className="itemquiz" key={resource.id}>
            <Item/>
            <h1>{resource.name}</h1>
            <button target="_blank" rel="noreferrer" href={resource.url}>
              Start the quizz
            </button>
            <p>{resource.start_time}</p>
            <p>{resource.end_time}</p>
            <p>{resource.duration}</p>
          </div>
        ))}
    </div>
  );
}
