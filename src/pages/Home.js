import React, { useEffect, useState } from "react";
import renderComponent from "../utils/renderFunction";

const Home = () => {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    fetch("initialData.json")
      .then((res) => res.json())
      .then((data) => setElements(data));
  }, []);
  if (!elements.length) {
    return <div>loading...</div>;
  }
  return <main>{elements?.map((element) => renderComponent(element))}</main>;
};

export default Home;
