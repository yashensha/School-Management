import Announcement from "@/components/Announcement";
import BigCalander from "@/components/BigCalander";
import EventCalander from "@/components/EventCalander";

const TeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {" "}
      {/* Left */}
      <div className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="font-semibold text-lg ">Schedule (4A)</h1>
          <BigCalander />
        </div>
      </div>
      {/* Right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <Announcement />
        <EventCalander />
      </div>
    </div>
  );
};

export default TeacherPage;
