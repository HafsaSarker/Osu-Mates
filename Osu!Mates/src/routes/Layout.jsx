import { Outlet } from "react-router-dom";
import Navbar from "../Components/Nav/Navbar";
import './Layout.css'
export default function Layout() {
    return (
        <div className="layout">
            <Navbar />
            <Outlet />
        </div>
    )
}