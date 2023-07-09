import React, { useState, useEffect } from "react";

export default function ScoreTable({score}) {
  const [selectedTeam, setSelectedTeam] = useState("teamA");

  const handleTeamSwitch = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Cricket Scorecard</h1>

      <div className="flex mb-4">
        <button
          className={`mr-2 py-2 px-4 rounded ${
            selectedTeam === "teamA" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTeamSwitch("teamA")}
        >
          Team A
        </button>
        <button
          className={`py-2 px-4 rounded ${
            selectedTeam === "teamB" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => handleTeamSwitch("teamB")}
        >
          Team B
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr>
              <th className="py-2 border">Batsman</th>
              <th className="py-2 border">Runs</th>
              <th className="py-2 border">Balls</th>
              <th className="py-2 border">4s</th>
              <th className="py-2 border">6s</th>
              <th className="py-2 border">SR</th>
            </tr>
          </thead>
          <tbody>
            {selectedTeam === "teamA" ? (
              <>
                <tr>
                  <td className="py-2 border">Player 1</td>
                  <td className="py-2 border">50</td>
                  <td className="py-2 border">35</td>
                  <td className="py-2 border">4</td>
                  <td className="py-2 border">2</td>
                  <td className="py-2 border">142.85</td>
                </tr>
                <tr>
                  <td className="py-2 border">Player 2</td>
                  <td className="py-2 border">25</td>
                  <td className="py-2 border">20</td>
                  <td className="py-2 border">2</td>
                  <td className="py-2 border">1</td>
                  <td className="py-2 border">125.00</td>
                </tr>
                {/* Add more rows for Team A as needed */}
              </>
            ) : (
              <>
                <tr>
                  <td className="py-2 border">Player 1</td>
                  <td className="py-2 border">40</td>
                  <td className="py-2 border">30</td>
                  <td className="py-2 border">3</td>
                  <td className="py-2 border">1</td>
                  <td className="py-2 border">133.33</td>
                </tr>
                <tr>
                  <td className="py-2 border">Player 2</td>
                  <td className="py-2 border">30</td>
                  <td className="py-2 border">25</td>
                  <td className="py-2 border">2</td>
                  <td className="py-2 border">0</td>
                  <td className="py-2 border">120.00</td>
                </tr>
                {/* Add more rows for Team B as needed */}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
