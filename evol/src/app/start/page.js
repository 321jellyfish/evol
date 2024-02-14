"use client";

import Header from "../components/header";
// import Input from "../components/input";
import Link from "next/link";

import { useState } from "react";

export default function Home() {
  const [areAnswersSubmitted, setAreAnswersSubmitted] = useState(false);
  const [questionOneAnswer, setQuestionOneAnswer] = useState("");
  const [questionTwoAnswer, setQuestionTwoAnswer] = useState("");
  const [questionThreeAnswer, setQuestionThreeAnswer] = useState("");
  const [questionFourAnswer, setQuestionFourAnswer] = useState("");
  const [questionFiveAnswer, setQuestionFiveAnswer] = useState("");
  const [questionSixAnswer, setQuestionSixAnswer] = useState("");
  const [questionSevenAnswer, setQuestionSevenAnswer] = useState("");
  const [questionEightAnswer, setQuestionEightAnswer] = useState("");
  const [questionNineAnswer, setQuestionNineAnswer] = useState("");

  if (areAnswersSubmitted) {
    return (
      <main>
        <Header />
        <h2 className="text-xl mt-[50px]">
          The LoveLoveLove Quiz, 14th February 2024
        </h2>
        <p>Welcome to the LoveLoveLove Quiz!</p>
        <p>
          The questions for today's Valentine's Quiz are below, and you'll be
          able to see the answers as soon as you are done.
        </p>

        <form className="py-[30px]">
          <p className="pb-[10px]">
            1. Which character does Maggie Smith play in the 'Harry Potter'
            films?
          </p>
        </form>
        <p className="text-pink-400 font-bold">You wrote:</p>
        <p>{questionOneAnswer}</p>
        <p className="text-pink-400 font-bold">The correct answer is:</p>
        <p>Professor Minerva McGonagall</p>

        <hr />

        <form className="py-[30px]">
          <p className="pb-[10px]">
            2. What is the largest city in the Alsace region?
          </p>
        </form>
        <p className="text-pink-400 font-bold">You wrote:</p>
        <p>{questionTwoAnswer}</p>
        <p className="text-pink-400 font-bold">The correct answer is:</p>
        <p>Strasbourg</p>

        <hr />

        <form className="py-[30px]">
          <p className="pb-[10px]">
            3. Series 2 of 'Vigil' is partly set in which fictional country?
          </p>
        </form>
        <p className="text-pink-400 font-bold">You wrote:</p>
        <p>{questionThreeAnswer}</p>
        <p className="text-pink-400 font-bold">The correct answer is:</p>
        <p>Wudyan</p>

        <hr />

        <form className="py-[30px]">
          <p className="pb-[10px]">
            4. In what year did Ronnie O'Sullivan first win the World Snooker
            Championship?
          </p>
        </form>
        <p className="text-pink-400 font-bold">You wrote:</p>
        <p>{questionFourAnswer}</p>
        <p className="text-pink-400 font-bold">The correct answer is:</p>
        <p>2001</p>

        <form className="py-[30px]">
          <p className="pb-[10px]">
            5. Name 5 Best Picture Academy Award winning films whose title start
            with 'P' or 'C'.
          </p>
        </form>
        <p className="text-pink-400 font-bold">You wrote:</p>
        <p>{`${questionFiveAnswer}, ${questionSixAnswer}, ${questionSevenAnswer}, ${questionEightAnswer}, ${questionNineAnswer}`}</p>
        <p className="text-pink-400 font-bold">The correct answers are:</p>
        <p className="mb-[30px]">
          'Casablanca,' 'Cavalcade,' 'Chariots of Fire,' 'Chicago,' 'Cimarron,'
          'CODA,' 'Crash,' 'Parasite,' 'Patton,' 'Platoon'
        </p>

        <hr />
      </main>
    );
  }

  if (!areAnswersSubmitted) {
    return (
      <main>
        <Header />
        <h2 className="text-xl mt-[50px]">
          The LoveLoveLove Quiz, 14th February 2024
        </h2>
        <p className="pt-[10px]">Welcome to the LoveLoveLove Quiz!</p>
        <p className="pt-[10px]">
          The questions for today's Valentine's Quiz are below, and you'll be
          able to see the answers as soon as you are done.
        </p>

        <form className="py-[30px]">
          <p className="pb-[10px]">
            1. Which character does Maggie Smith play in the 'Harry Potter'
            films?
          </p>
          <label>
            <input
              type="text"
              value={questionOneAnswer}
              onChange={(event) => setQuestionOneAnswer(event.target.value)}
              className="border w-[300px]"
            />
          </label>
        </form>

        <hr />

        <form className="py-[30px]">
          <p className="pb-[10px]">
            2. What is the largest city in the Alsace region?
          </p>
          <label>
            <input
              type="text"
              value={questionTwoAnswer}
              onChange={(event) => setQuestionTwoAnswer(event.target.value)}
              className="border w-[300px]"
            />
          </label>
        </form>

        <hr />

        <form className="py-[30px]">
          <p className="pb-[10px]">
            3. Series 2 of 'Vigil' is partly set in which fictional country?
          </p>
          <label>
            <input
              type="text"
              value={questionThreeAnswer}
              onChange={(event) => setQuestionThreeAnswer(event.target.value)}
              className="border w-[300px]"
            />
          </label>
        </form>

        <hr />

        <form className="py-[30px]">
          <p className="pb-[10px]">
            4. In what year did Ronnie O'Sullivan first win the World Snooker
            Championship?
          </p>
          <label>
            <input
              type="text"
              value={questionFourAnswer}
              onChange={(event) => setQuestionFourAnswer(event.target.value)}
              className="border w-[300px]"
            />
          </label>
        </form>

        <hr />

        <form className="py-[30px] flex flex-col gap-[10px]">
          <p className="pb-[10px]">
            5. Name 5 Best Picture Academy Award winning films whose title start
            with 'P' or 'C'.
          </p>
          <label>
            <input
              type="text"
              value={questionFiveAnswer}
              onChange={(event) => setQuestionFiveAnswer(event.target.value)}
              className="border w-[300px]"
            />
          </label>
          <label>
            <input
              type="text"
              value={questionSixAnswer}
              onChange={(event) => setQuestionSixAnswer(event.target.value)}
              className="border w-[300px]"
            />
          </label>
          <label>
            <input
              type="text"
              value={questionSevenAnswer}
              onChange={(event) => setQuestionSevenAnswer(event.target.value)}
              className="border w-[300px]"
            />
          </label>
          <label>
            <input
              type="text"
              value={questionEightAnswer}
              onChange={(event) => setQuestionEightAnswer(event.target.value)}
              className="border w-[300px]"
            />
          </label>
          <label>
            <input
              type="text"
              value={questionNineAnswer}
              onChange={(event) => setQuestionNineAnswer(event.target.value)}
              className="border w-[300px]"
            />
          </label>
        </form>

        <hr />

        <div className="flex justify-center">
          <button
            onClick={() => setAreAnswersSubmitted(true)}
            className="bg-pink-400 p-[10px] my-[50px] hover:bg-pink-300"
          >
            Done - show answers!
          </button>
        </div>
      </main>
    );
  }
}
