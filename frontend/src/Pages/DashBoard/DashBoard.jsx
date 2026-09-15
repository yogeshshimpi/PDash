import { GrTask } from "react-icons/gr";
import "./DashBoard.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineCheckCircle, HiOutlineClock, HiOutlineExclamationCircle } from "react-icons/hi";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const DashBoard = () => {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(today);
  const data = [
  { day: "Mon", tasks: 4 },
  { day: "Tue", tasks: 7 },
  { day: "Wed", tasks: 5 },
  { day: "Thu", tasks: 9 },
  { day: "Fri", tasks: 6 },
  { day: "Sat", tasks: 8 },
  { day: "Sun", tasks: 10 },
];
 const addbutton = [
  {
    path:'/dashboard',
    name:'Add Task',

  },
  {
    path:'/dashboard',
    name:'Notes',

  },
  {
    path:'/dashboard',
    name:'Habit',

  },
  {
    path:'/dashboard',
    name:'Goals',

  },
 ]
  const taskStats = [
    { label: "Completed", value: "12", note: "5 completed today", icon: HiOutlineCheckCircle, tone: "success" },
    { label: "In progress", value: "4", note: "Across 3 projects", icon: HiOutlineClock, tone: "info" },
    { label: "Overdue", value: "2", note: "Needs attention", icon: HiOutlineExclamationCircle, tone: "warning" },
  ];

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
      <div className="add_button">
        {
          addbutton.map((item)=>{
            return(
            <button key={item.name} className="addButton">
              {item.name}
            </button>
            )
          })
        }
      </div>
      <section className="dashboard_analysis" aria-labelledby="task-analysis-title">
        <article className="daily_analysis task-trend">
          <header className="analysis_heading">
            <span className="analysis-icon" aria-hidden="true"><GrTask size={19}/></span>
            <div>
              <h2 id="task-analysis-title">Task analysis</h2>
              <p className="sub_title">Your completed tasks over the last 7 days.</p>
            </div>
            <span className="analysis-period">Last 7 days</span>
          </header>
          <div className="chart-wrap">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={data}>
              <CartesianGrid vertical={false} stroke="var(--border-subtle)" strokeDasharray="3 3"/>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9d9da1", fontSize: 12 }} dy={8}/>
              <YAxis axisLine={false} tickLine={false} width={28} tick={{ fill: "#9d9da1", fontSize: 12 }} allowDecimals={false}/>
              <Tooltip
                cursor={{ stroke: "#6f6f74", strokeDasharray: "4 4" }}
                contentStyle={{ background: "#1b1b1e", border: "1px solid #3b3b40", borderRadius: "8px", color: "#f5f5f5" }}
                labelStyle={{ color: "#9d9da1" }}
              />
              <Line
                type="monotone"
                dataKey="tasks"
                name="Tasks completed"
                stroke="#7c6cff"
                strokeWidth={3}
                dot={{ r: 3, fill: "#7c6cff", strokeWidth: 0 }}
                activeDot={{ r: 5, fill: "#f5f5f5", stroke: "#7c6cff", strokeWidth: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
          </div>
        </article>
        <div className="task-stat-grid">
          {taskStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article className={`daily_analysis task-stat task-stat--${stat.tone}`} key={stat.label}>
                <div className="task-stat-top">
                  <span className="task-stat-icon" aria-hidden="true"><Icon size={20}/></span>
                  <span className="task-stat-label">{stat.label}</span>
                </div>
                <strong className="task-stat-value">{stat.value}</strong>
                <p className="task-stat-note">{stat.note}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default DashBoard;
