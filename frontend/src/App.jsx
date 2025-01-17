import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LoginPage } from "./Routes";

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
