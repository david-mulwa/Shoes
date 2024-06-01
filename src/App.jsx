import {Hero, PopularProduct, Footer, CustomerReviews, Subscribe, Services, SpecialOffer, SuperQuality} from './Sections';

import Nav from './components/Nav';

const App = ()=>(
  <main className="relative">
     <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b" >
      <Hero />
    </section>

    <section className="padding">
      <PopularProduct />
    </section>

    <section className="padding">
      <SuperQuality />
    </section>

    <section className="padding-x py10">
      <Services />
    </section>

    <section className="padding">
      <SpecialOffer />
    </section>

    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

    
  </main>
);

export default App;