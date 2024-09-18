import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4 ">
      {/* Searchbar */}
      <div className="hidden md:flex items-center gap-3 text-xs rounded-full ring-[1.5px] ring-gray-300 px-3  ">
        <Image src="/public/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* Icons and user */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 items-center justify-center flex cursor-pointer">
          <Image src="/public/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white relative rounded-full w-7 h-7 items-center justify-center flex cursor-pointer">
          <Image src="/public/announcement.png" alt="" width={20} height={20} />
          <div className="rounded-full text-white absolute -top-3 -right-3 flex items-center justify-center w-5 h-5 bg-purple-500">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">admin</span>
        </div>

        <Image
          src="/public/avatar.png"
          alt=""
          width={36}
          height={36}
          className="rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavBar;
