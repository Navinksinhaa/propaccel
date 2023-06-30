
import Pricing from '../pages/Pricing';
import Review from '../pages/Review';
import About from '../pages/About';
import { Router, Route, Routes } from 'react-router-dom';
const AllRoutes = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<About />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/review" element={<Review />} />
                </Routes>
            </Router>
        </>
    )
}

export default AllRoutes