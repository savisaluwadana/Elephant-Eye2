// src/router/Router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home.jsx";
import Admin from "../pages/admin/auth/Auth.jsx";
import Dashboard from "../pages/admin/sliderbar/Slider.jsx";
import Aboutus from "../pages/about/aboutus.jsx";
import Gallery from "../pages/gallery/gallery.jsx";
import PrivateRoute from './PrivateRoute.jsx';
import Book from '../pages/admin/menu/Book.jsx'
import Rooms from "../pages/rooms/Rooms.jsx";
import Form from "../assets/Components/Forms/Form1.jsx";
import Offer from "../pages/admin/menu/Offer.jsx";
import RoomTable from "../Bookings/RoomTable.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/book" element={<Form/>}/>
                <Route path="/roomtable" element={<RoomTable/>}/>


                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/book" element={<Book />} />

                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/offer" element={<PrivateRoute><Offer/></PrivateRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;