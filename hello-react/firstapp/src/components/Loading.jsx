import React, { useEffect, useState } from "react";

export default function Loading() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [location, setLocation] = useState();
  const [subLoc, setSubLoc] = useState([]);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 3000);
  }, []);

  useEffect(() => {
    if (location === "서울") {
      setSubLoc(["서초"]);
    } else if (location === "천안") {
      setSubLoc(["고터"]);
    }
  }, [location]);

  return (
    <div>
      {isLoaded ? (
        <>
          <button onClick={() => setLocation("서울")}>서울</button>
          <button onClick={() => setLocation("천안")}>천안</button>
          <p>현재 지역 :  {location} </p>
          <p>세부 지역 :  {subLoc}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
