import Footer from "./components/Footer";
import Header from "./components/Header";
import Game from "./components/Game";

export default function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Game />
      </main>
      <Footer />
    </div>
  );
}
