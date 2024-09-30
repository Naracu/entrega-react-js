import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home, Category, ItemDetail, NotFound} from "../pages";
import{NavBar} from "../Components"

export const MainRouter = () => {
    return (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/item/:id" element={<ItemDetail />}/>
            <Route path="/category/:id" element={<Category />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </Router>
    );
};