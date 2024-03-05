import NavigationBar from "./components/NavigationBar";
import Wisata from "./components/Wisata";
import Utama from "./components/Utama";
import About from "./components/About";
import Budaya from "./components/Budaya";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavigationBar />
      <Utama />
      <About />
      <Wisata />
      <Budaya />
      <Footer />
    </>
  );
}

export default App;
