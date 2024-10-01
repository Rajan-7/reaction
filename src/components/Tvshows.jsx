import React from "react";
import { useParams } from "react-router";

const Tvshows = () => {
  let { id } = useParams();
  return <>
   <h1>Hello Tv Shows</h1>
  </>;
};

export default Tvshows;
