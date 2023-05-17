import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { key } = useParams();
  const [details, setDetails] = useState("");
  const getDetails = async () => {
    const resp = await fetch(`https://api.tvmaze.com/shows/${key}`);
    const data = await resp.json();
    setDetails(data);
    console.log(data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      {details ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30vw",
            padding: "20px 20px",
          }}
        >
          <div>
            <img src={details?.image?.medium} alt="" />
          </div>
          <div>
            {" "}
            <b>Name</b> {details?.name}
          </div>
          <div>
            {" "}
            <b>Language</b> {details?.language}
          </div>
          <div>
            {" "}
            <b>Summary</b> {details?.summary}
          </div>
          <div>
            {" "}
            <b>Status</b> {details?.status}
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Details;
