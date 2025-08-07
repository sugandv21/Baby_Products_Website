import React, { useEffect } from "react";
import FeaturedCategories from '../components/FeaturedCategories';
import banner from '../assets/images/home_banner.jpg';
import TrustSection from '../components/TrustSection';
import BabyStroller from '../components/BabyStroller';
import FeedingBottle from '../components/FeedingBottle';
import FaqSection from '../components/FaqSection';
import BestSellers from '../components/BestSellers';
import Pampers from '../components/Pampers';
import Testimonials from '../components/Testimonials';

function Home() {
     useEffect(() => {
    document.title = 'EarthBubs | Home';
  }, []);
  return (
    <div>
       <section
  className="relative w-full h-[20vh] md:h-[50vh] lg:h-[80vh] bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: `url(${banner})` }}
>
  <div className="absolute inset-0 z-0" />

  <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20">
    <h1 className="text-lg md:text-3xl lg:text-5xl font-semibold text-white mb-2 md:mb-10">
      Gentle Care for Growing Joy
    </h1>
    <p className="text-sm md:text-xl lg:text-2xl text-white max-w-xl">
      Premium baby care products crafted with love, purity, and the softest materials – because your baby deserves the best.
    </p>
  </div>
</section>




      <FeaturedCategories />
      <TrustSection />
      <BestSellers />
      <BabyStroller />
      <FeedingBottle />
      <Pampers />
      
  <Testimonials />

      <section id="faq" className="...">
      <FaqSection />
      </section>
    </div>
  );
}

export default Home;


