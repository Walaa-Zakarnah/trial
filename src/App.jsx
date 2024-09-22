import Navbar from "./Components/Navbar/Navbar";
import Footer from './Components/Footer/Footer';
import About from "./Components/About/About";
function App() {
  let age=23;  
  return (
    <>
      <Navbar name='walaa' age={age} />
      <About >
      <p>This is a child component</p>
      </About>
      <h2> hello {name}</h2>
      <Footer />
      
    </>
  )
}

export default App
