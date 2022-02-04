import React from 'react';

function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="/images/prof.png"
        alt=""
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">Joe Soe</h2>
        <h3 className="text-sm text-gray-400">Welcome to Margatni</h3>
      </div>
      <button className="text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
