import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-between bg-darkBlue">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Blueprint Screening</h1>
        <p>Lorem ipsum dolor</p>
        <Link href="screening">
          <button>Get Started</button>
        </Link>
      </div>
    </main>
  );
}
