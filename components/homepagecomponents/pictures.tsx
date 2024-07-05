import Image from "next/image";

const sponsorsData = [
  { src: '/1.jpg', alt: 'Aave' },
  { src: '/2.jpg', alt: 'Aave' },
  { src: '/3.jpg', alt: 'Aave' },
  { src: '/4.jpg', alt: 'Aave' },
  { src: '/5.jpg', alt: 'Aave' },
  { src: '/6.jpg', alt: 'Aave' },
  { src: '/7.jpg', alt: 'Aave' },
  { src: '/8.jpg', alt: 'Aave' },
  { src: '/9.jpg', alt: 'Aave' },
  { src: '/10.jpg', alt: 'Aave' },
  { src: '/11.jpg', alt: 'Aave' },
  { src: '/12.jpg', alt: 'Aave' },
];

// Sort the sponsors alphabetically by alt text
sponsorsData.sort((a, b) => a.alt.localeCompare(b.alt));

export const Pictures = () => {
  return (
    <div 
      className="flex flex-col py-6 gap-6"
      style={{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,8,19,1) 40%, rgba(26,23,87,1) 100%)',
      }}
    >
      <h1 className="text-center text-4xl font-bold text-white">OUR EVENT PHOTOS</h1>
      <p className="text-medium my-2 text-center text-sm md:text-xl text-white">
      View our photos of our conferences since 2015.
      </p>
      <div className="sponsors grid grid-cols-1 md:grid-cols-2 max-w-screen-lg  mx-auto lg:grid-cols-4">
        {sponsorsData.map((sponsor, index) => (
          <div key={index} className="flex items-center justify-center p-4  rounded shadow-md">
            <Image src={sponsor.src} width={400} height={250} alt={sponsor.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
