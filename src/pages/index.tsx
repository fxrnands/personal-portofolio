import Card from "@/components/about-me";
import GreetingCard from "@/components/greeting-card";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <GreetingCard />
      <Card />
    </>
  );
}
