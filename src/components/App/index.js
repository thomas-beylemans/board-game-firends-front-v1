import {useEffect} from 'react';
import jwt_decode from 'jwt-decode';
import {Routes, Route, Navigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {saveUser} from '../../actions/user';

import Register from "../Pages/Register";
import SignIn from "../Pages/SignIn";
import Dashboard from "../Pages/Dashboard";
import Team from "../Pages/Team";
import Profile from "../Pages/Profile";
import EditProfile from "../Pages/EditProfile";
import PageEvent from "../Pages/PageEvent";
import EventDetails from "../Pages/EventDetails";
import FAQ from '../Pages/FAQ';
import CGU from '../Pages/CGU';
import Error from '../Error';
import PublicProfile from '../Pages/PublicProfile';

import "./styles.scss";

export default function App() {
    const dispatch = useDispatch();

    const logged = useSelector(state => state.user.logged);

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if (loggedUser) {
            const decodedToken = jwt_decode(loggedUser.accessToken);
            const loggedUserEmail = decodedToken.user.email;
            dispatch(saveUser(loggedUser.username, loggedUserEmail));
        }
    }, [dispatch]);

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={logged ? <Navigate to="/dashboard" /> : <SignIn />}
                />
                <Route
                    path="/register"
                    element={logged ? <Navigate to="/dashboard" /> : <Register />}
                />
                {logged && <Route path="/dashboard" element={<Dashboard />} />}
                {logged && <Route path="/profile" element={<Profile />} />}
                {logged && <Route path="/editprofile" element={<EditProfile />} />}
                {logged && <Route path="/profile/:username" element={<PublicProfile />} />}
                {logged && <Route path="/events" element={<PageEvent />} />}
                {logged && <Route path="/events/:id" element={<EventDetails />} />}
                <Route path="/team" element={<Team />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/terms-of-use" element={<CGU />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}
