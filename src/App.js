import HomePage from "./containers/page/homePage/HomePage";
import MenuPage from "./components/menu/MenuPage";
function App() {
  return (
    <div className="App flex">
      <MenuPage />
      <HomePage />
    </div>
  );
}

export default App;
