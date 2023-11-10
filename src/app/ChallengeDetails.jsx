// pages/index.js
"use client";
import React, { useState } from "react";
import { challenges } from "./data";

const ChallengeDetails = () => {
  const [challengeId, setChallengeId] = useState("");
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  const handleChange = (e) => {
    setChallengeId(e.target.value);
  };

  const handleRetrieveChallenge = () => {
    const id = parseInt(challengeId, 10);
    const foundChallenge = challenges.find((challenge) => challenge.id === id);

    if (foundChallenge) {
      setSelectedChallenge(foundChallenge);
    } else {
      setSelectedChallenge(null);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Challenge Details</h1>

      <div className="mb-4">
        <label
          htmlFor="challengeId"
          className="block text-sm font-medium text-gray-600">
          Enter Challenge ID:
        </label>
        <input
          type="number"
          id="challengeId"
          name="challengeId"
          value={challengeId}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>

      <button
        onClick={handleRetrieveChallenge}
        className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Retrieve Challenge
      </button>

      {selectedChallenge && (
        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-2">{selectedChallenge.name}</h1>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            {selectedChallenge.problem}
          </h3>
          <ul className="list-disc list-inside">
            {selectedChallenge.pain_points.map((point, index) => (
              <li
                key={index}
                className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChallengeDetails;
