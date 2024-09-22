import Announcement from "@/components/Announcement";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalander from "@/components/EventCalander";
import FinanceChart from "@/components/FinanceChart";
import Usercard from "@/components/Usercard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* Usercards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <Usercard type="Students" />
          <Usercard type="Teachers" />
          <Usercard type="Parents" />
          <Usercard type="Staffs" />
        </div>
        {/* Middlecharts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottomcharts */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalander />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage;
