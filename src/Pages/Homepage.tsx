import { Hero } from '../components/home/Hero';
import { FeaturedCourses } from '../components/home/FeaturedCourses';
import { HowItWorks } from '../components/home/HowItWorks';
import { WhyInvestSmart } from '../components/home/WhyInvestSmart';
import { HomeFAQ } from '../components/home/HomeFAQ';

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <HowItWorks />
      <WhyInvestSmart />
      <HomeFAQ />
    </>
  );
}
