import "./DashBoard.css";
import { FaRegCalendarAlt } from "react-icons/fa";

const DashBoard = () => {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(today);

  return (
    <main className="dashBoard">
      <header className="dashboard_header">
        <div className="dashboard_title">
          <h1 className="title_text">Dashboard</h1>
          <p className="dashboard_subtitle">Here's your productivity overview for today.</p>
        </div>
        <div className="dashboard_date">
          <span className="dash_date_icon" aria-hidden="true"><FaRegCalendarAlt size={19}/></span>
          <div className="dashboard_date_content">
            <time className="dashBoard_date_date" dateTime={today.toISOString().slice(0, 10)}>
              {formattedDate}
            </time>
            <p className="dashboard_slogn">
              Stay consistent, keep going!
            </p>
          </div>
        </div>
      </header>
      <div className="taskItem">
        
      </div>
      <div className="dashboard_analysis">

      </div>
    </main>
  );
};

export default DashBoard;
