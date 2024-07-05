import Image from "next/image";

const sponsorsData = [
  { src: '/aave.png', alt: 'Aave' },
  { src: '/absa.png', alt: 'Absa' },
  { src: '/algo.png', alt: 'Algorand' },
  { src: '/altcoin.png', alt: 'Altcoin' },
  { src: '/banks.png', alt: 'Banks' },
  { src: '/Binance.png', alt: 'Binance' },
  { src: '/bird.png', alt: 'Bird' },
  { src: '/data.png', alt: 'Data' },
  { src: '/factom-sponsor.png', alt: 'Factom' },
  { src: '/ibm.png', alt: 'IBM' },
  { src: '/ig.png', alt: 'IG' },
  { src: '/klever.png', alt: 'Klever' },
  { src: '/old.png', alt: 'Old Mutual' },
  { src: '/online.jpg', alt: 'Online' },
  { src: '/sap-sponsor.png', alt: 'SAP' },
  { src: '/stanbic.png', alt: 'Stanbic' },
  { src: '/staker.png', alt: 'Staker' }
];

// Sort the sponsors alphabetically by alt text
sponsorsData.sort((a, b) => a.alt.localeCompare(b.alt));

export const Sponsors = () => {
  return (
    <div 
      className="flex flex-col py-6 gap-6"
      style={{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,8,19,1) 40%, rgba(26,23,87,1) 100%)',
      }}
    >
      <h1 className="text-center text-4xl font-bold text-white">Our Sponsors</h1>
      <p className="text-medium my-2 text-center text-sm md:text-xl text-white">
        These are some of the companies that have sponsored our events since 2015.
      </p>
      <div className="sponsors grid grid-cols-1 md:grid-cols-2 max-w-screen-lg gap-10 mx-auto lg:grid-cols-3">
        {sponsorsData.map((sponsor, index) => (
          <div key={index} className="flex items-center justify-center p-4 bg-white rounded shadow-md">
            <Image src={sponsor.src} width={300} height={200} alt={sponsor.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
