import Image from "next/image";

const BASE_API_URL = 'https://api.farcasterkit.com';

interface LeaderboardItem {
  rank: string;
  eth_name: string;
  display: string;
  pfp: string | null;
  fid: number;
  connected_addresses: string;
}


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col py-12 px-24">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-center text-2xl lg:text-4xl font-bold mb-16">
          <span> The Block Proposal Leaderboard for Farcaster</span>
        </h1>
      </div>
    <table className="min-w-full">
      <thead>
          <tr className="bg-white-200">
            <th className="px-4 py-2 text-left">Rank</th>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Blocks Proposed</th>
          </tr>
      </thead>
      <tbody className="divide-y divide-gray-300">

      </tbody>
    </table>
    </div>
  );
}

