import React, { useEffect, useState } from "react";
import Card from "./Card.js";
const Landing = () => {
  const [apiData, setApiData] = useState([]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
  };

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.tvmaze.com/search/shows?q=avengers"
      );
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {console.log(apiData)}
      {apiData.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "50px",
            justifyContent: "center",
            padding: "20px 20px"
          }}
        >
          {apiData.map((item) => {

            const {
              id,
              name,
              language,
              genres,
              runtime,
              premiered,
              rating,
              image,
            } = item.show;
            console.log("current id",id)
            return (
              <Card
                id={id}
                name={name}
                language={language}
                genres={genres}
                runtime={runtime}
                premiered={ formatDate(premiered) }
                rating={rating?.average}
                thumbnail={image?.medium}
              />
            );
          })}
        </div>
      ) : (
        <p>Fetching Data</p>
      )}
    </>
  );
};

export default Landing;
