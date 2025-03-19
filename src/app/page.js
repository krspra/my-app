"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState(["text", "date", "number"]);

  const handleForm = (e) => {
    const choice = e.target.innerText;
    let newValue;
    if (choice === "Text") newValue = "text";
    else if (choice === "Number") newValue = "number";
    else if (choice === "Date") newValue = "date";
    else if (choice === "Checkbox") newValue = "checkbox";

    if (newValue) {
      setFormData((prev) => [...prev, newValue]); // Use setState to update state
    }
  };

  return (
    <>
      <div className="w-full text-center text-5xl">Avlokan</div>
      <div className="w-full flex justify-around mt-4" onClick={handleForm}>
        <button className="cursor-pointer bg-amber-500 p-2 rounded-2xl w-[80px] text-white">Text</button>
        <button className="cursor-pointer bg-pink-500 p-2 rounded-2xl w-[80px] text-white">Number</button>
        <button className="cursor-pointer bg-green-500 p-2 rounded-2xl w-[80px] text-white">Date</button>
        <button className="cursor-pointer bg-red-500 p-2 rounded-2xl w-[90px] text-white">Checkbox</button>
      </div>
      <form className="w-fit mt-4">
        {formData.map((val, index) => (
          <input key={index} type={val} className="block mb-2 border p-2" />
        ))}
      </form>
    </>
  );
}
