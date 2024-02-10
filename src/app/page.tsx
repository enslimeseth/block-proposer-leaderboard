import Image from "next/image";

export default function Home() {
  return (
    // Adjusted padding: py-12 for vertical padding, px-24 for horizontal padding
    <main className="flex min-h-screen flex-col py-12 px-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-center text-2xl lg:text-4xl font-bold">The Block Proposer Leaderboard for Farcaster</h1>
      </div>
    </main>
  );
}

