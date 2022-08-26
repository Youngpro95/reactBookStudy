import { useParams } from "react-router-dom";
import React from "react";

const data = {
  velopert: {
    name: "김민준",
    description: "리액트 개발자",
  },
  young: {
    name: "권영민",
    description: "미래의 개발자",
  },
};

export default function Profile() {
  const params = useParams();
  const profile = data[params.username];
  console.log(profile);
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>없는 프로필</p>
      )}
    </div>
  );
}
