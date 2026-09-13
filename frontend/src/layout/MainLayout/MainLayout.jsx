import { Outlet } from 'react-router-dom'
import SideBar from '../../component/SideBar/SideBar'
import Navbar from '../../component/Navbar/Navbar'
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div className='app-layout'>
        <SideBar/>
        <section className='MainLayout'>
            <Navbar/>
        <Outlet/>

        </section>
    </div>
  )
}

export default MainLayout
