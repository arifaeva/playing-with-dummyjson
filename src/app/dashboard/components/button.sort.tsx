// "use client";

// import { Button } from "@/components/button";

// import React, { useState } from "react";

// export const SortButton = ({ currentSort }: { currentSort: string }) => {
//   const [, setSortOrder] = useState(currentSort);
//   return (
//     <div className="flex gap-4">
//       <Button
//         onClick={() => setSortOrder("asc")}
//         disabled={currentSort === "asc"}
//       >
//         Sort by First Name Ascending
//       </Button>
//       <Button
//         onClick={() => setSortOrder("desc")}
//         disabled={currentSort === "desc"}
//       >
//         Sort by First Name Descending
//       </Button>
//     </div>
//   );
// };

"use client";

import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import React from "react";

export const SortButton = () => {
  const router = useRouter();

  function handleSortAsc() {
    router.push(`?sortBy=firstName&order=asc`);
  }

  function handleSortDesc() {
    router.push(`?sortBy=firstName&order=desc`);
  }

  return (
    <div className="flex gap-4">
      <Button onClick={handleSortAsc}>Sort by First Name Ascending</Button>
      <Button onClick={handleSortDesc}>Sort by First Name Descending</Button>
    </div>
  );
};
