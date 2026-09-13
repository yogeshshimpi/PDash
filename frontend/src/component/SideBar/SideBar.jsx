import { useState } from "react";
import "./SideBar.css";
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarLeftExpandFilled, TbNotes } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { GrTask } from "react-icons/gr";
import { FaRegCalendarAlt, FaUserClock } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";

const SideBar = () => {
    const[collapseSideBar,setCollapseSideBar] = useState(false)
  const sidebarItem = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: MdDashboard,
    },
    {
      label: "Task",
      path: "/task",
      icon: GrTask,
    },
    {
      label: "Notes",
      path: "/notes",
      icon: TbNotes,
    },
    {
      label: "Habit",
      path: "/habit",
      icon: FaUserClock,
    },
    {
      label: "Goals",
      path: "/goals",
      icon: GoGoal,
    },
    {
      label: "Calendar",
      path: "/calender",
      icon: FaRegCalendarAlt,
    },
  ];
  const handleSideBar = () =>{
    setCollapseSideBar(!collapseSideBar)
  }
  return (
    <aside className={`sidebar ${collapseSideBar ? "sidebar--collapsed" : ""}`}>
      <div className="top_side_bar">
        <div className="brand">
          <div className="brand_logo" aria-hidden="true">PD</div>
          <div className="brand_copy">
            <span className="brand_name">PDash</span>
            <span className="brand_label">WORKSPACE</span>
          </div>
          <button
            onClick={handleSideBar}
            className="wrap_side_bar"
            aria-label={collapseSideBar ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapseSideBar ? <TbLayoutSidebarLeftExpandFilled size={20}/>:<TbLayoutSidebarLeftCollapseFilled size={20} />  }
          </button>
        </div>
        <div className="side_navigation">
          {sidebarItem.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.path} to={item.path} title={collapseSideBar ? item.label : undefined}>
                <Icon size={20} />
                {!collapseSideBar && <span>{item.label}</span>}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="bottom_side_bar">
        <NavLink to="setting" title={collapseSideBar ? "Settings" : undefined}>
          <IoIosSettings size={20} />
          {!collapseSideBar && <span>Settings</span>}
        </NavLink>
      </div>
    </aside>
  );
};

export default SideBar;
