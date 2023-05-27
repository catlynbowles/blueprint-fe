import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Blueprint Screening</h1>
        <p>Lorem ipsum dolor</p>
        <Link href='screening'>
          <button>Get Started</button>
        </Link>
      </div>
    </main>
  );
}
