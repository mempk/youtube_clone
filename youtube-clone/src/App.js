import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_page">
        <SideBar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
