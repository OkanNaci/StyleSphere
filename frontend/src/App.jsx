import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>{/*User Layout */}</Route>
        <Route>{/*Admin Layout */}</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
