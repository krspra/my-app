"use client"
import { useState } from "react";

export default function Home() {
  const formData=useState(["text"]);

  const handleForm=(e)=>{
    let choice=e.target.innerText;
    if(choice=="Text"){
      formData.push("text")
    }
    else if(choice=="Number"){
      formData.push("number")
    }
    else if(choice=="Date"){
      formData.push("date")
    }
    else if(choice=="Checkbox"){
      formData.push("checkbox")
    }
  }
  return (
    <>
      <div className="w-full text-center text-5xl">Avlokan</div>
      <div className="w-full flex justify-around mt-4" onClick={handleForm
      }>
        <button className="cursor-pointer bg-amber-500 p-2 rounded-2xl w-[80px] text-white">Text</button>
        <button className="cursor-pointer bg-pink-500 p-2 rounded-2xl w-[80px] text-white">Number</button>
        <button className="cursor-pointer bg-green-500 p-2 rounded-2xl w-[80px] text-white">Date</button>
        <button className="cursor-pointer bg-red-500 p-2 rounded-2xl w-[90px] text-white">Checkbox</button>
      </div>
      <form>
        {
          formData.map((val)=>console.log(val)
          )
        }
      </form>
    </>
  );
}
