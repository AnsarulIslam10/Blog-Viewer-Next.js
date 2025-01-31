import React from "react";

const Details = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return (
    <div className="mt-8 max-w-3xl mx-auto px-2 ">
      <div className="p-10 text-center border-2 rounded-xl border-b-4 border-cyan-500 border-r-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-500">{data.body}</p>
      </div>
    </div>
  );
};

export default Details;
