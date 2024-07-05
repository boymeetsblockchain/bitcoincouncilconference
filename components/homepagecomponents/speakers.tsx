import Image from "next/image";

const speakerArray = [
  { src: "/andreas.jpg", name: "ANDREAS M. ANTONOPOULOS (KEYNOTE)", event: "Entrepreneur, Author and Security Expert" },
  { src: "/sun.jpg", name: "JUSTIN SUN (KEYNOTE)", event: "FOUNDER OF TRON" },
  { src: "/ben.jpg", name: "DR BENEDICT BEREK (KEYNOTE)", event: "Entrepreneur, Author and Crypto Expert" },
  { src: "/charles.png", name: "CHARLES HOSKINSON (KEYNOTE)", event: "Founder and CEO of IOHK (Input Output Hong Kong) and Founder of Cardano" },
  { src: "/jack.jpg", name: "JACK LU", event: "Founder and CEO of Wanchain" },
  { src: "/dixon.jpg", name: "DENELLE DIXON", event: "CEO & Executive Director of the Stellar Development Foundation" },
  { src: "/stani.jpg", name: "STANI KULECHOV", event: "Founder and CEO of Aave" },
  { src: "/pal.jpg", name: "RAOUL PAL (KEYNOTE)", event: "CEO and Co-Founder of Real Vision" },
  { src: "/brock.jpg", name: "BROCK PIERCE", event: "Co-Founder and Managing Partner Blockchain Capital" },
];

export const Speaker = () => {
  return (
    <div className="px-3 md:px-8 bg-[#1a1757] flex py-6 flex-col gap-y-4 text-white">
      <h1 className="text-center text-4xl font-bold text-white">PREVIOUS KEYNOTE SPEAKERS</h1>
      <p className="text-medium my-2 text-center text-sm md:text-xl text-white">
        Our speakers include industry leaders and visionaries who have helped shape blockchain technology and cryptocurrencies.
      </p>
      <div className="speakers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
        {speakerArray.map((speaker, index) => (
          <div key={index} className="speaker-card flex flex-col items-center bg-white p-4 rounded-lg shadow-md text-center text-black">
            <Image src={speaker.src} width={200} height={200} alt={speaker.name} className="rounded-full mb-4" />
            <h2 className="text-xl font-bold">{speaker.name}</h2>
            <p className="text-md mt-2">{speaker.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
