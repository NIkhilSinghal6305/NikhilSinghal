import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="bg-black flex flex-col px-10 relative">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
