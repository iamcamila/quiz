import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Home, MiniGames, Quiz, SongGame } from "./components";
import { MovieGame } from "./components/MovieGame";
function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="song" element={<SongGame />} />
          <Route path="movie" element={<MovieGame />} />
          <Route path="games" element={<MiniGames />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
