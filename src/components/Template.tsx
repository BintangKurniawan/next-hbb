import Link from "next/link";
import React from "react";

type AppShellProps = {
  children: React.ReactNode;
};

const Template = (props: AppShellProps) => {
  const { children } = props;
  return (
    <>
      <div className="bg-blue-600 w-full h-[100px]">
        <h1>You want a template? you can create it.</h1>
      </div>
      <div>{children}</div>
      <Link href="/post">Check more</Link>
    </>
  );
};

export default Template;
