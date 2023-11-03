import { Button } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import { ToastContainer, toast } from "react-toastify";

import AppRoutes from "./routes/AppRoutes";
import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserContext } from "./context/UserContext";
import { handleRefresh } from "./redux/actions/userAction";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(handleRefresh());
        }
    }, []);
    return (
        <>
            <div className="app-container">
                <Header />
                <Container>
                    <AppRoutes />
                </Container>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
}

export default App;
