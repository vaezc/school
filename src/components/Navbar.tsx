import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 py-1">
        <Image src="/search.png" alt="search" width={16} height={16} />
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none w-[200px] p-2 bg-transparent"
        />
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="bell" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="message" width={20} height={20} />
          <div className="absolute -top-3 -right-3 bg-purple-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px]  text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
