import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Home } from "./components/Home";
import { SideBar } from "./components/SideBar";
import {CertificateANdTraining} from "./components/CertificateANdTraining";
import { PersonalProjects } from "./components/PersonalProjects";
import {ProfessionalProjects} from "./components/ProfessionalProjects";
import {Contact} from "./components/Contact";


function App() {
  return (
    <div >
      <SideBar  />
      <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/education" element={<Education />}></Route>
        <Route path="/project" element={<PersonalProjects />}></Route>
        <Route path="/work" element={<ProfessionalProjects />}></Route>
        <Route path="/certificate" element={<CertificateANdTraining />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
