import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import ResumeList from "./pages/ResumeList/ResumeList";
import ResumePage from "./pages/ResumePage/ResumePage";
import ResumePreview from "./pages/ResumePreview/ResumePreview";

function App({ baseUrl }) {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/resumes" />} />
        <Route exact path="/resumes" element={<ResumeList baseUrl={baseUrl} />} />
        <Route exact path="/resumes/:resumeId" element={<ResumePage baseUrl={baseUrl} />} />
        <Route exact path="/resumes/:resumeId/preview" element={<ResumePreview baseUrl={baseUrl} />} />
      </Routes>
    </div>
  );
}

export default App;