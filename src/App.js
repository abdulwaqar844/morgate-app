import "./styles/output.css";
import ApplicationForm from "./Form/ApplicationForm";
import PrimarySection from "./Form/PrimarySection";
import Properties from "./Form/Properties";
import Assets from "./Form/Assets";
import Liablities from "./Form/liabilites";
import SubjectPropertyInfo from "./Form/SubjectPropertyInfo";
import Home from "./Form/Home";
import { Email } from "./Form/Email";

function App() {
  return (
    <div>
      <Email />
      {/* 
       <Home />
         <ApplicationForm />
      <PrimarySection />
      <Properties />
      <Liablities /> 
      <SubjectPropertyInfo /> */}
      {/* <Assets />  */}
    </div>
  );
}

export default App;
