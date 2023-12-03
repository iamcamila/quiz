import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { quizLibrary } from "./assets/quizLibrary";
import { Home, Quiz, SongGame } from "./components";
import { MovieGame } from "./components/MovieGame";
function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz questions={quizLibrary.questions} />} />
          <Route path="song" element={<SongGame />} />
          <Route path="movie" element={<MovieGame />} />
          <Route path="words" element={<Home />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
