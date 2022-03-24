import './App.css';
import Main from "./Main";
import { Route } from "react-router-dom";
import Page from "./Page";


function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/page/:apples" >
        <Page />
      </Route>
    </div>
  );
}



export default App;
