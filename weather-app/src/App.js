import "./App.css";
//React query
import { QueryClientProvider, QueryClient } from "react-query";

//React Query Dev tools
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./components/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h4 className="text-2xl">My Weather App</h4>
        <Home />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
