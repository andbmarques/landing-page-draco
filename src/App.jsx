import { VStack } from "@chakra-ui/react"
import Navbar from "./components/navbar"
import About from "./sections/about"
import Hero from "./sections/hero"
import Plans from "./sections/plans"

function App() {

  return (
    <VStack bgColor='gray.900'>
      <Navbar />
      <Hero />
      <About />
      <Plans />
    </VStack>
  )
}

export default App
