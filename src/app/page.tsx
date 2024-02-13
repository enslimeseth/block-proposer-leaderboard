import Image from "next/image";
import { QueryParameter } from "@cowprotocol/ts-dune-client";
import duneClient from "@/utils/duneClient";

async function getDuneData() {
  const queryID = 3424022;
  const duneClient

await duneClient.refresh(queryID)
  const res //catch query result
}



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col py-12 px-24 items-center">
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-center font-mono text-sm lg:flex">
        <h1 className="text-center text-2xl lg:text-4xl font-bold mb-16">
          <span> The Block Proposal Leaderboard for Farcaster</span>
        </h1>
      </div>
      <div className="overflow-x-auto w-full"> {/* Ensure the table is centered and responsive */}
        <table className="min-w-full text-center"> {/* Center table text */}
          <thead>
            <tr className="bg-white-200">
              <th className="px-4 py-2">Rank</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Blocks Proposed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td>limes.eth</td>
              <td>Limes</td>
              <td>40</td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>ncale.eth</td>
              <td>Nicholas Brodeur</td>
              <td>3</td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td>greg</td>
              <td>Greg</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  ); 
}

