import React from 'react';
import data from './data';

function Suggestions() {
  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions For You</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      {data.slice(0, 5).map((profile) => (
        <div key={profile.id} className="flex items-center">
          <img
            className="mt-3 h-10 w-10 rounded-full border p-[2px]"
            src={profile.avatar}
          />
          <div className="ml-4 flex-1">
            <h2 className="text-semibold text-sm">{profile.name}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company}
            </h3>
          </div>
          <button className="text-bold text-xs text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
