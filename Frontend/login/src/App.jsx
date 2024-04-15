import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/loginPage";
import FormPage from "./components/Form";
import ChatbotPage from "./components/Chatbot";
// import Dashboard from "./components/Dashboard";

import Risk from "./components/Risk";
import DataTable from "./components/Savings";

function App() {
  let [login, setLogin] = React.useState(false);
  let [email, emailsetter] = React.useState(null);

  if (login === true) {
    return (
      <div>
        <FormPage email={email} />;{/* <Risk /> */}
        {/* <DataTable /> */}
      </div>
    );
  } else {
    return (
      <div>
        <LoginPage loginfunc={setLogin} emailsetter={emailsetter} />
      </div>
    );
  }
}

export default App;
