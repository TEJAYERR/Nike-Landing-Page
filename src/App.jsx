import NavBar from "./sections/NavBar";
import Hero from "./sections/hero";
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
      <section className="pb-15 pt-5">
        <Hero />
      </section>
      <section className='p-15 min-h-screen'>
        <PopularProducts />
      </section>
      <section className="p-15 min-h-screen">
        <SuperQuality />
      </section>
      <section className="p-15">
        <Services />
      </section>
      <section className="p-15 min-h-screen">
        <SpecialOffers />
      </section>
      <section className="p-15 bg-blue-50">
        <CustomerReviews />
      </section>
      <section className="p-15">
        <Subscribe />
      </section>
      <section className="p-15 bg-black">
       <Footer />
      </section>
    </main>
  )
}

export default App;
