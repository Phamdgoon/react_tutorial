import { Button } from "react-bootstrap";
import "./App.scss";
import Header from "./components/Header";
import TableUsers from "./components/TableUser";
import Container from "react-bootstrap/Container";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
    return (
        <>
            <div className="app-container">
                <Header />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<TableUsers />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
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
