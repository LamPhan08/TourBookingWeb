import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import TourDetails from '../pages/TourDetails'
import Tours from '../pages/Tours'
import ThankYou from "../pages/ThankYou";
import TourList from "../Management/Tours/TourList";
import DashboardTourDetails from "../Management/Tours/DashboardTourDetails";
import TourAdd from "../Management/Tours/TourAdd";
import TourEdit from "../Management/Tours/TourEdit";
import CustomerList from "../Management/Customers/CustomerList";
import CustomerDetails from "../Management/Customers/CustomerDetails";
import CustomerAdd from "../Management/Customers/CustomerAdd";
import CustomerEdit from "../Management/Customers/CustomerEdit";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home'/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/tours' element={<Tours/>} />
            <Route path='/tours/:id' element={<TourDetails/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/thank-you' element={<ThankYou/>} />
            <Route path='/tours/search' element={<SearchResultList/>} />
            <Route path='/dashboard/tours/tourlist' element={<TourList/>}/>
            <Route path='/dashboard/tours/tourdetails/:id' element={<DashboardTourDetails/>}/>
            <Route path='/dashboard/tours/touradd' element={<TourAdd/>}/>
            <Route path='/dashboard/tours/touredit/:id' element={<TourEdit/>}/>
            <Route path='/dashboard/customers/customerlist' element={<CustomerList/>}/>
            <Route path='/dashboard/customers/customerdetails/:id' element={<CustomerDetails/>}/>
            <Route path='/dashboard/customers/customeradd' element={<CustomerAdd/>}/>
            <Route path='/dashboard/customers/customeredit/:id' element={<CustomerEdit/>}/>
        </Routes>
    )
};

export default Routers;