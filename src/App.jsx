import{Hero,PopularProducts,CustomerReviews,Footer,Service,SpecialOffers,Subscribe,SuperQuality} from './assets/sections/index.js';
import Nav from './components/Nav.jsx';
const App = () =>(
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="py-10 padding-x">
      <Service/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
    </section>
    <section className="w-full py-16 padding-x sm:py-32">
      <Subscribe/>
    </section>
    <section className="pb-8 bg-black padding-x padding-t">
      <Footer/>
    </section>
  </main>
);

export default App;