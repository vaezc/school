"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const TableSearch = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const search = formData.get("search") as string;
    const params = new URLSearchParams(window.location.search);
    params.set("search", search);
    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <form
      className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2"
      onSubmit={handleSubmit}
    >
      <Image src="/search.png" alt="" width={14} height={14} />
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </form>
  );
};

export default TableSearch;
