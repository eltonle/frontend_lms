import { Outlet } from "react-router-dom";

function StudentViewCommontLayout() {
  return (
    <div>
      Common content
      <Outlet />
    </div>
  );
}

export default StudentViewCommontLayout;
