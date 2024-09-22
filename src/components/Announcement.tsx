import Image from "next/image";

const Announcement = () => {
  return (
    <div className="bg-white rounded-md p-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {/* Announcements start */}

        <div className="bg-lamaSkyLight rounded-md p-4 ">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              02-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            facere totam a aspernatur.
          </p>
        </div>

        <div className="bg-lamaPurpleLight rounded-md p-4 ">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              02-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            facere totam a aspernatur.
          </p>
        </div>

        <div className="bg-lamaYellowLight rounded-md p-4 ">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">Lorem ipsum dolor sit.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              02-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            facere totam a aspernatur.
          </p>
        </div>
        {/* Announcements start */}
      </div>
    </div>
  );
};

export default Announcement;
