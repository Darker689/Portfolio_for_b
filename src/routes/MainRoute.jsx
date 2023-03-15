// Router dom
import { Route, Routes } from 'react-router-dom'
// components
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
// pages
import Home from '../pages/Home'

const MainRoute = () => {
    return (
        <>
            <Navbar />
            <div className='flex container'>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </>
    )
}

export default MainRoute