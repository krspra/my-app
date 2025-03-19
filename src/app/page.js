"use client"
import { useState } from "react";

export default function Home() {
  const formData=useState([]);
  return (
    <>
      <div className="w-full text-center text-5xl">Avlokan</div>
      <div className="w-full flex justify-around mt-4">
        <button className="cursor-pointer bg-amber-500 p-2 rounded-2xl w-[80px]">Text</button>
        <button className="cursor-pointer bg-pink-500 p-2 rounded-2xl w-[80px]">Number</button>
        <button className="cursor-pointer bg-green-500 p-2 rounded-2xl w-[80px]">Date</button>
        <button className="cursor-pointer bg-red-500 p-2 rounded-2xl w-[90px]">Checkbox</button>
      </div>

      <form>
        
      </form>
    </>
  );
}
