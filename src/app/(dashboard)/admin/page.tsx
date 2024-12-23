import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4 sm:flex-row">
      <div className="md:w-2/3 w-full">
        <div className="flex gap-2 justify-between flex-wrap">
          <UserCard type="Students" />
          <UserCard type="Teacher" />
          <UserCard type="Staff" />
          <UserCard type="Parents" />
        </div>
      </div>
      <div className="md:w-1/3 w-full">right</div>
    </div>
  );
};

export default AdminPage;
