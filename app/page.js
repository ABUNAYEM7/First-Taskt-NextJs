import Image from "next/image";
import CardSection from "./Components/CardSection";
import bannerImage from "@/public/bannerImage.jpg"

export default function Home() {
  return (
    <div>
      {/* banner-section */}
      <section className="my-12 p-6 flex flex-col md:flex-row gap-5 items-center justify-between">
        <div className="w-full md:w-1/2 p-4 space-y-6">
        <h3 className="text-3xl md:text-5xl font-bold">Exploring Perspectives, One Story at a Time</h3>
        <p className="text-base font-medium">
        Dive into a world of diverse viewpoints and thought-provoking narratives. Our blog brings stories, insights, and ideas to inspire, inform, and ignite curiosity, one story at a time.
        </p>
        </div>
        <div className="w-full md:w-1/2 p-4">
        <Image
        src={bannerImage}
        alt="banner image"
        placeholder="blur"
        />
        </div>
      </section>
      {/* blog-section */}
      <section className="my-12 p-6">
        <CardSection/>
      </section>  
    </div>
  );
}
