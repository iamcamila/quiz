import { ChakraProvider } from "@chakra-ui/react"
import { quizLibrary } from "./assets/quizLibrary"
import { Quiz } from "./components"
function App() {
  return (
    <ChakraProvider>
      <Quiz questions={quizLibrary.questions}/>
    </ChakraProvider>
    
  )
}

export default App
