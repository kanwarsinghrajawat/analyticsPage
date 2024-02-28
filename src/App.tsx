import ChartPage from "./pages/ChartPage";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="bg-[rgb(41,46,57)] p-6 h-[100vh] flex flex-col gap-12 overflow-y-scroll">
          <Header />
          <Stats />
          <ChartPage />
        </div>
      </Provider>
    </>
  );
}

export default App;
