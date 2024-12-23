import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 sm:flex-row">
      <div className="md:w-2/3 w-full flex flex-col gap-8">
        <div className="flex gap-2 justify-between flex-wrap">
          <UserCard type="Students" />
          <UserCard type="Teacher" />
          <UserCard type="Staff" />
          <UserCard type="Parents" />
        </div>
        {/* middle chart */}
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="lg:w-1/3 w-full h-[450px]">
            <CountChart />
          </div>
          <div className="lg:w-2/3 w-full h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* bottom chart */}
        <div className="w-full h-[450px]">
          <FinanceChart />
        </div>
      </div>
      <div className="md:w-1/3 w-full">right</div>
    </div>
  );
};

export default AdminPage;
