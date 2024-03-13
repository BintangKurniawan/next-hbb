import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Btn from "@/components/Btn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1>Everything named index, you can access it straight in routing with just using &apos;/&apos;</h1>

      <Link href="/about">CLick here to go to about</Link>

      <Link href="/setting">
        you not want to mess up your /pages folder?
        <br />
        just create another folder in it and create index.tsx. named the folder with route you want. CLick me
      </Link>

      <Link href="/blog/1">you want specific page? like, detail blog, maybe? click me.</Link>

      <p>Here is how you use components.</p>
      <Btn />
      <Btn />
      <Btn />

      <Link href="/dashboard">Now checkout here, click me</Link>
    </main>
  );
}
