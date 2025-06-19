import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import './App.css'
import PopularProducts from "./sections/PopularProducts";
import { SuperQuality } from "./sections/SuperQuality";
import { Services } from "./sections/Services"
import { SpecialOffers } from "./sections/SpecialOffers";
import { CustomerReviews } from "./sections/CustomerReviews";
import { Subscribe } from "./sections/Subscribe";
import { Footer } from "./sections/Footer";

const App = () =>{
  return(
    <main className="pt-[90px]">
      <NavBar />
      {/* <div className="min-h-screen bg-black"></div> */}
      <section className="pb-15 pt-5">
        <Hero />
      </section>
      <section className='p-15 max-sm:px-5'>
        <PopularProducts />
      </section>
      <section className="p-15 max-sm:px-5">
        <SuperQuality />
      </section>
      <section className="p-15 max-sm:px-5">
        <Services />
      </section>
      <section className="p-15 max-sm:px-5">
        <SpecialOffers />
      </section>
      <section className="p-15 bg-blue-50 max-sm:px-5">
        <CustomerReviews />
      </section>
      <section className="p-15 max-sm:px-5">
        <Subscribe />
      </section>
      <section className="p-15 bg-black max-sm:px-5">
       <Footer />
      </section>
    </main>
  )
}

export default App;
