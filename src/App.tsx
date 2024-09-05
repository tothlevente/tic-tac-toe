import Footer from "./components/Footer";
import Header from "./components/Header";
import Game from "./components/Game";

import { useState } from "react";

export default function App() {
  const [firstCharacter, setFirstCharacter] = useState("❎");
  const [secondCharacter, setSecondCharacter] = useState("🔴");

  return (
    <div className="site-wrapper">
      <Header
        firstCharacter={firstCharacter}
        setFirstCharacter={setFirstCharacter}
        secondCharacter={secondCharacter}
        setSecondCharacter={setSecondCharacter}
      />
      <main>
        <Game
          firstCharacter={firstCharacter}
          secondCharacter={secondCharacter}
        />
      </main>
      <Footer />
    </div>
  );
}
