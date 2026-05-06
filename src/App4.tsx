import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Kanban from "./pages/Kanban";
import TaskList from "./pages/TaskList";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/tasks" element={<TaskList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;