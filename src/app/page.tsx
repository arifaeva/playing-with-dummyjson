import { Button } from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-yellow-100 h-screen flex justify-center items-center">
      <div className="bg-sky-500 [box-shadow:5px_5px_black] border-2 border-black w-[400px] p-6 flex flex-col gap-8 rounded-md">
        <h1 className="text-center">Welcome to User App!</h1>
        <div className="flex gap-4 self-center">
          <Link href="/login" className="inline-block">
            <Button variant="secondary">Get Started</Button>
          </Link>
          <Link href="/login" className="inline-block">
            <Button>Sign in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
