import Card from "@/components/about-me";
import Experience from "@/components/experiences";
import GreetingCard from "@/components/greeting-card";
import Navbar from "@/components/navbar";
import Project from "@/components/project";
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <GreetingCard />
      <Card />
      <Experience />
      <Project />
      <Footer />
    </>
  );
}
