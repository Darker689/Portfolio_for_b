// Router dom
import { BrowserRouter } from "react-router-dom";
// Routes
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <div className="every_site">
      <BrowserRouter>
        <MainRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
