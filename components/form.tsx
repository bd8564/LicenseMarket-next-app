"use client";

import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function checkForm() {
    if (name.length < 5) {
      setMessage("اسم باید بیشتر از ۵ کاراکتر باشد ");
      return;
    }

    if (Number(age) < 18) {
      setMessage("سن کمتر از ۱۸ سال است ");
      return;
    }

    if (Number(age) >= 18) {
      setMessage("سن ۱۸ سال یا بیشتر است ✅");
    }

    if (password.length < 8) {
      setMessage("پسورد باید حداقل ۸ کاراکتر باشد ");
      return;
    }

    if (!/[a-zA-Z]/.test(password) && !/\d/.test(password)) {
      setMessage("پسورد باید ترکیبی از عدد و حرف باشد ");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setMessage("پسورد باید حداقل یک حرف بزرگ داشته باشد ");
      return;
    }

    setMessage("همه اطلاعات صحیح است");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-300"
      dir="rtl"
    >
      <div className="w-96 rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">ثبت اطلاعات</h1>

        <div className="flex gap-3 items-center">
          <h6 className="mb-4">نام</h6>
          <input
            className="mb-4 w-full rounded-lg border p-3"
            placeholder="لطفا نام خود را وارد کنید"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <h6 className="mb-4">سن</h6>
          <input
            className="mb-4 w-full rounded-lg border p-3"
            placeholder="لطفا سن را وارد کنید"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <h6 className="mb-4">پسورد</h6>
        <input
          className="mb-4 w-full rounded-lg border p-3"
          placeholder="لطفا پسورد را وارد کنید"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>

        <button
          onClick={checkForm}
          className="w-full rounded-lg bg-blue-500 p-3 text-white"
        >
          بررسی
        </button>

        <p className="mt-4 text-center font-bold">{message}</p>
      </div>
    </div>
  );
}
