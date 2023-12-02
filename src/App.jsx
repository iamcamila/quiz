import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { quizLibrary } from "./assets/quizLibrary";
import { Home, Quiz } from "./components";
function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="quiz" element={<Quiz questions={quizLibrary.questions} />} />
          <Route path="song" element={<Home />} />
          <Route path="movie" element={<Home />} />
          <Route path="words" element={<Home />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
