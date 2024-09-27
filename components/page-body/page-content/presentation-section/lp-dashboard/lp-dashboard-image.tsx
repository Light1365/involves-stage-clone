import dashboardImg from "@/public/images/dashboard.png";

const LpDashboard = () => {
  const imgUrl = "@/public/images/dashboard.png";

  return (
    <div className="h-90 mt-10">
      <img src={imgUrl} alt="dashboard.png" className="lp-dashboard"></img>
    </div>
  );
};

export default LpDashboard;
