"use client";
import React, { useEffect, useState } from "react";

const Learn = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  console.log("Hi");

  useEffect(() => {
    const data = fetch("https://jsonplaceholder.typicode.com/users").then(
      async (data) => {
        const body = await data.json();
        setLoading(false);
        setUsers(body);
        console.log(body);
      },
    );
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
           {" "}
      {loading && (
        <div className="">
                    <h2>Loading ...</h2>
                 {" "}
        </div>
      )}
           {" "}
      {users.map((user, index) => (
        <div
          key={user.id} className="flex flex-col border-amber-300 
          border w-full p-4 rounded-xl"
        >
                    <span>{user.name}</span>
                   {" "}
          <span className="text-sm opacity-60">
                        {user.website} - {user.phone}
                     {" "}
          </span>
                 {" "}
        </div>
      ))}
            <span className="text-xl text-red-600">{count} </span>
           {" "}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="border border-green-400 px-4 bg-green-400 rounded-2xl cursor-pointer"
      >
                update      {" "}
      </button>
         {" "}
    </div>
  );
};

export default Learn;
