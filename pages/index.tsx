import Footer from "@/components/Footer/Footer";
import DiscourseSlack from "@/components/Home/DiscourseSlack/DiscourseSlack";
import SliderMain from "@/components/Home/MonsonrySliders/SliderMain";
import Banner from "@/components/Home/banner/Banner";
import CardSlider from "@/components/Home/cardSlider/CardSlider";
import PerfectCloud from "@/components/Home/perfectCloud/PerfectCloud";

import WhyPrefect from "@/components/Home/whyPrefect/WhyPrefect";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner />
        <PerfectCloud />
        <SliderMain />
        <CardSlider />
        <WhyPrefect />
        <DiscourseSlack />
        <Footer />
      </main>
    </>
  );
}
