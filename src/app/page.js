import Link from "next/link";
import React from "react";

const Home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`blog/${item?.id}`}
            className="border-2 rounded-xl shadow-sm border-r-4 border-cyan-500 border-b-4 hover:scale-105 transition-all duration-300 p-2 text-center flex justify-center items-center"
          >
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
