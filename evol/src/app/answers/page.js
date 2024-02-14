import Header from "../components/header";
import Input from "../components/input";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <h2 className="text-xl mt-[50px]">
        The LoveLoveLove Quiz, 14th February 2024 {questionOneAnswer}
      </h2>
      <p>Welcome to the LoveLoveLove Quiz!</p>
      <p>
        The questions for today's Valentine's Quiz are below, and you'll be able
        to see the answers as soon as you are done.
      </p>
      <div>
        <Input actualAnswer="kitten" />
      </div>
      <Link href="/answers">Done - show answers!</Link>
      <p>The answers!</p>
    </main>
  );
}
