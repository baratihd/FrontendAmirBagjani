//libraries
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

//components
import { Navbar, Container, SuspensePage } from "components/common";

//pages
const DashboardPage = lazy(() => import("pages/DashboardPage"));


export const Layout = () => {
    return (
        <Container>
            <Navbar />
            <Routes>
                <Route path="/" element={<SuspensePage children={<DashboardPage />} />} />
                <Route path="*" element={<SuspensePage children="NOT_FOUND" />} />
            </Routes>
        </Container>
    )
}