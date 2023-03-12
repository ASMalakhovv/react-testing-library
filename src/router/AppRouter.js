import {Route, Routes} from "react-router-dom";
import {About} from "../pages/About";
import {Main} from "../pages/Main";
import {Users} from "../Users/Users";
import {UserDetails} from "../pages/UserDetails";
import {Error} from "../pages/Error";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />}/>
            <Route path="/" element={<Main />}/>
            <Route path="users" element={<Users />}/>
            <Route path="user/:id" element={<UserDetails />}/>
            <Route path="/*" element={<Error />} />
        </Routes>
    )
}