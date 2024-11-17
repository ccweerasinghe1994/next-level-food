import Link from "next/link";

export default function Home() {
  console.log("Home Page");

  return (
    <main className="">
      <h1 className="text-white text-center text-6xl font-quicksand font-bold mt-5">
        Time to get started!
      </h1>
      <ul>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
        <li>
          <Link href="/meals/share">Share</Link>
        </li>
      </ul>
    </main>
  );
}
