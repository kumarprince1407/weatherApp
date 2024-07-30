import "./App.css";
//React query
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

//React Query Dev tools
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./components/Home";
import Details from "./components/Details";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="App">
          <h4 className="app_header text-5xl">My Weather App</h4>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
          {/* <Home /> */}
        </div>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
