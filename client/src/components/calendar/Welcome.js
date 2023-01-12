import React from "react";

export default function Welcome(text) {
  console.log(text);
  /* const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUserName(name);
  }, []); */

  return (
    <div className={text.text}>
     {/*  <h1>{`Welcome ${
        userName.charAt(0).toUpperCase() + userName.slice(1)
      }`}</h1> */}
    </div>
  );
}
