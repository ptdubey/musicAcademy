
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyUseContent from "@/components/WhyUseContent";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   <HeroSection></HeroSection>
   <FeaturedCourses></FeaturedCourses>
   <WhyUseContent></WhyUseContent>
   <MusicSchoolTestimonials/>
   <UpcomingWebinars/>
   <Instructors/>
   <Footer/>
   </main>
  );
}
