import About from "./components/About"
import Booking from "./components/Booking"
import Brand from "./components/Brand"
import Categories from "./components/Categories"
import Discount from "./components/Discount"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"

function App() {
  return (
    <div>
      <Navbar/>
      <Brand/>
      <About/>
      <Categories/>
      <Discount/>
      <Booking/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
