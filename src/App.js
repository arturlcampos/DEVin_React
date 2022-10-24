import AllRoutes from "./components/AllRoutes/index";
import { LoginProvider } from "./contexts/UseLogin/index";






function App() {
  return (
    <div className="App">
      <LoginProvider>   
      <AllRoutes />
      </LoginProvider>
   
    </div>
  );
}

export default App;
