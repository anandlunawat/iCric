import React, { useEffect } from "react";
import ScoreTable from "../Components/ScoreTable";
import { useState } from "react";
import { getScorecard } from "../actions/scorecard";
import Cards from "../Components/Cards";
import { getMatches } from "../actions/matches";
import { Link } from "react-router-dom";

export default function Score() {
  const [status, setStatus] = useState();
  useEffect(() => {
    (async () => {
      try {
        const res = await getMatches();
        console.log("Matches", res);
        setStatus(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div className="flex flex-col w-full h-auto bg-no-repeat max-sm:bg-contain max-lg:bg-contain 2xl:bg-cover bg-back">
      <div className="flex flex-col w-full gap-10 p-20 text-white max-lg:p-6 max-sm:gap-2 max-md:gap-4">
        <span className="text-6xl font-semibold max-lg:text-2xl max-sm:text-xs">
          Local Indoor<br></br>Cricket Leagues
        </span>
        <span className="w-[50%] 2xl:w-[20%] max-sm:text-[7px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </span>
        <button className="mt-auto max-sm:p-1 max-sm:w-[30%] max-sm:text-sm whitespace-pre max-lg:p-0 p-3 border-2 border-solid w-[20%] rounded-md">
          <div className="flex flex-row items-center justify-center">
            <span className="max-sm:text-xs">Book Now</span>
            <></>
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center max-md:w-[80%] max-sm:w-[96%] w-[80%] lg:w-[95%] gap-2 text-white bg-red-600 px-14 max-sm:p-3 max-sm:bg-cover">
          <span className="whitespace-pre max-sm:text-lg basis-1/4">
            • Live
          </span>
          <div className="flex flex-row gap-2">
            <span className="whitespace-pre max-sm:text-sm">Team Name</span>
            <div className="flex flex-col">
              <span className="font-bold whitespace-pre max-sm:text-sm">
                127/4
              </span>
              <span className="font-bold whitespace-pre max-sm:text-sm">
                17.3 Over
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <span className="whitespace-pre max-sm:text-sm">Team Name</span>
            <div className="flex flex-col">
              <span className="font-bold whitespace-pre max-sm:text-sm">
                127/4
              </span>
              <span className="font-bold whitespace-pre max-sm:text-sm">
                20 Over
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-white text-center text-3xl font-bold">
            Live Matches
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center">
          {status.map((match) => {
            return match.matchStatus === "Completed" ? (
              <Link to={`/scorecard/${match.matchId}`}>
                <Cards match={match} />
              </Link>
            ) : (
              <Cards match={match} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
