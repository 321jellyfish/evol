"use client";

import { useState } from "react";

export default function Input({ actualAnswer }) {
  const [userAnswer, setUserAnswer] = useState("");
  console.log(actualAnswer);

  // if (userAnswer == actualAnswer) {
  //   return <h1>Correct!</h1>;
  // }

  return (
    <form>
      <p>1. Who wrote the poem?</p>
      <label className="block">
        <input
          type="text"
          value={userAnswer}
          onChange={(event) => setUserAnswer(event.target.value)}
          className="border w-[300px]"
        />
      </label>
    </form>
  );
}
