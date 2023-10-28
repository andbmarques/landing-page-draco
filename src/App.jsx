import { VStack } from "@chakra-ui/react"
import Navbar from "./components/navbar"
import About from "./sections/about"
import Hero from "./sections/hero"

function App() {

  return (
    <VStack bgColor='gray.900'>
      <Navbar />
      <Hero />
      <About />
    </VStack>
  )
}

export default App
