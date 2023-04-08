import "./App.css";
import Ui from "./Components/Ui";
import { Routes, Route } from "react-router-dom";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Ui />} />
            </Routes>
        </div>
    );
}

export default App;
