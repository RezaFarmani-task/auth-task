"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isValidIranianPhone } from "@/_lib/utils";
import { setUser } from "@/_lib/storage";
import { User } from "@/types/user";

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!phone.trim()) {
      setError("پر کردن این فیلد ضروری است");
      return;
    }

    if (!isValidIranianPhone(phone)) {
      setError("شماره موبایل معتبر نیست");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      const user: User = {
        name: `${data.results[0].name.first} ${data.results[0].name.last}`,
        email: data.results[0].email,
        picture: data.results[0].picture.medium,
      };
      setUser(user);
      router.push("/dashboard");
    } catch {
      setError("خطا در ورود، دوباره تلاش کنید");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-2xl shadow-md border border-gray-200"
    >
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium mb-2 text-gray-700"
        >
          شماره موبایل
        </label>
        <Input
        dir="rtl"
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="مثال: 09123456789"
          aria-invalid={!!error}
          className={`${
            error ? "border-red-500 focus-visible:ring-red-500" : ""
          }`}
        />
        {error && (
          <p role="alert" className="text-red-500 text-sm mt-2">
            {error}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
        disabled={loading}
        aria-busy={loading}
      >
        {loading ? "در حال ورود..." : "ورود"}
      </Button>
    </form>
  );
}
