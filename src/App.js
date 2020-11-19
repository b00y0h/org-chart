import "./App.css";
import OrgChart from "./mychart";
import data from "./data.json";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <OrgChart nodes={data} />
    </div>
  );
}

export default App;
