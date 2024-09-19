import Usercard from "@/components/Usercard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        {/* Usercards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <Usercard type="Students" />
          <Usercard type="Teachers" />
          <Usercard type="Parents" />
          <Usercard type="Staffs" />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
