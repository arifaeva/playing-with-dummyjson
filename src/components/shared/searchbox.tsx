"use client";

import React, { useState } from "react";
import { Input } from "../input";
import { useRouter } from "next/navigation";

export const SearchBox = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");
  console.log(query);

  function handleSearch(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setQuery(e.target.value);
  }

  function handlePushSearch(event: { code: unknown }) {
    if (event.code === "Enter") {
      router.push(`?q=${query}`);
    }
  }

  return (
    <div>
      <Input
        placeholder="Search user by name"
        onKeyUp={handlePushSearch}
        onChange={handleSearch}
      />
    </div>
  );
};
