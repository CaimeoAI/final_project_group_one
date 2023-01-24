import React from "react";
import { useState, useEffect } from "react";

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://roadmap.sh/jsons/roadmaps/javascript.json")
      .then((res) => res.json())
      .then((data) => {
        const controls = data.mockup.controls.control;
        console.log("control", controls); // control is an array of objects

        const filteredResources = controls.filter((control) => {
          return control.typeID !== "Arrow";
        });
        console.log("filteredResources", filteredResources);

        console.log(data);
        setResources(filteredResources);

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
    <div className="flex flex-wrap my-6 align-center justify-center">
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {resources &&
        resources.map((resource) => {
          return <h1 className="shadow-text-secondary shadow-lg text-lg text-center hover:cursor-pointer hover:bg-grayed-out md:w-[15%] border-text-primary  m-4 p-1 rounded bg-accent-secondary">{resource.properties?.controlName}</h1>
        })}
    </div>
  );
}
