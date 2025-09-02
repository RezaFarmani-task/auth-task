"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser, clearUser } from "@/_lib/storage";
import { User } from "@/types/user";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = getUser();
    if (!storedUser) {
      router.replace("/");
    } else {
      setUser(storedUser);
    }
  }, [router]);

  const handleLogout = () => {
    clearUser();
    router.replace("/");
  };

  if (!user) return null;

  return (
    <main className="flex items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8 text-center">
        <div className="flex flex-col items-center">
          <div className="relative w-28 h-28 mb-4">
            <Image
              src={user.picture}
              alt={user.name}
              fill
              className="rounded-full object-cover shadow-md border-4 border-indigo-100"
              sizes="112px"
              priority
              unoptimized
            />
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            👋 {user.name} سلام
          </h1>
          <p className="text-gray-600 mb-8">{user.email}</p>
          <Button
            onClick={handleLogout}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
          >
            خروج
          </Button>
        </div>
      </div>
    </main>
  );
}
