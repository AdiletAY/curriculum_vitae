import "./global.css"
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import HomePage from "@/pages/home/HomePage.tsx";





function App() {

  return (
    <>
      <Header/>
      <HomePage />
      <Footer />
    </>
  )
}

export default App
