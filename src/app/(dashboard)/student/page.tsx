import Announcement from "@/components/Announcement";
import BigCalander from "@/components/BigCalander";
import EventCalander from "@/components/EventCalander";
import Image from "next/image";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {" "}
      {/* Left */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="font-semibold text-lg ">Schedule (4A)</h1>
          <BigCalander />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventCalander />
        <Announcement />
      </div>
    </div>
  );
};

export default StudentPage;
