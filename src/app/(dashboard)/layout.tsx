import MenuBar from "@/components/MenuBar";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  px-2 py-4 max-h-dvh overflow-auto scrollable-container">
        <Link
          href="/"
          className="flex items-center lg:items-end justify-center gap-2 lg:justify-start"
        >
          <Image src="./logo.png" width={32} height={32} alt="Logo" />
          <span className="hidden lg:block ">SchooLama</span>
        </Link>
        <MenuBar />
      </div>
      {/* Right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-y-auto flex flex-col">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
