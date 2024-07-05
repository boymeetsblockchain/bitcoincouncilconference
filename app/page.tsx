import { Email } from "@/components/homepagecomponents/email";
import { Events } from "@/components/homepagecomponents/events";
import { Info } from "@/components/homepagecomponents/info";
import { Pictures } from "@/components/homepagecomponents/pictures";
import { Speaker } from "@/components/homepagecomponents/speakers";
import { Sponsors } from "@/components/homepagecomponents/sponsors";
import Hero from "@/components/homepagecomponents/hero";

export default function Home (){
  return(
   <>
   <Hero/>
   <Info/>
   <Events/>
   <Sponsors/>
   <Speaker/>
   <Pictures/>
   <Email/>
   </>
  )
}