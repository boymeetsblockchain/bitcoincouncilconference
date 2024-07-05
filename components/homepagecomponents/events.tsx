export const Events = () => {
    const eventsData = [
      {
        title: "CRYPTO FEST 2024",
        edition: "6th Edition",
        date: "10-12 October 2024",
        location: "In-Person in Cape Town, South Africa",
        description: "Get ready for the most exciting South African crypto event of the year! Crypto Fest is back for its sixth edition and once again we’re bringing the party to Cape Town, South Africa. Get ready to experience the ultimate fusion of cutting-edge technology and vibrant culture in the breathtaking city ranked among the most beautiful in the world. Welcome to Cryptopia, where the possibilities are endless! Join us for a day filled with mind-blowing conversations, thrilling debates, and a unique exploration of how cryptocurrencies and blockchain communities are reshaping the world as we know it. Finance, investing, art, music, sport, gaming, entertainment, marketing, governance—no industry is left untouched. Crypto Fest will be the place to be. Rub shoulders with industry experts and visionary speakers from across the globe as they share their insights on the hottest trends in cryptocurrency, the Metaverse, Web3, and Decentralised Finance (DeFi). Get ready to have your mind expanded and your ideas ignited!",
      },
      {
        title: "BLOCKCHAIN AFRICA CONFERENCE 2024",
        edition: "10th Edition",
        date: "20 November 2024",
        location: "In-Person in Tshwane, Gauteng, South Africa",
        description: "Since 2015, Bitcoin Events has been hosting the annual Blockchain Africa Conferences, the first of their kind in Africa. The popular conferences have attracted some of the top thought leaders and pioneers in the blockchain and cryptocurrency industries worldwide, including Charles Hoskinson, Founder and CEO of IOHK, Founder of Cardano, and Director of The Bitcoin Project; and Andreas M. Antonopoulos, security and distributed systems expert, coder, entrepreneur and author. The conference themes have evolved in line with the global adoption of blockchain technology: ‘Beyond the Hype’, ‘From Hype to Mainstream’, ‘Ready for Business?’ and most recently ‘Ready for Business’. Join us at Africa’s leading blockchain and cryptocurrency conference, the 10th edition of the Blockchain Africa Conference.",
      },
      {
        title: "DEFI CONFERENCE",
        edition: "Virtual",
        date: "",
        location: "",
        description: "Decentralised Finance or DeFi is disrupting the world of finance as we know it and growing from strength to strength. This new technology is emerging quickly and the pressure is on for organisations to operate more efficiently and effectively. The DeFi Conferences are a 1 day online event focused on these innovations.",
      },
    ];
  
    return (
      <div className="flex flex-col py-6 gap-6">
        <h1 className="text-center text-4xl font-bold">Our Events</h1>
        <p className="text-medium my-2 text-center text-sm md:text-xl">
          Don’t miss our exciting cryptocurrency and blockchain events coming up!
        </p>
        <div className="events flex flex-col gap-6">
          {eventsData.map((event, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-md">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p className="text-lg font-semibold">{event.edition}</p>
              {event.date && <p className="text-md">{event.date}</p>}
              {event.location && <p className="text-md">{event.location}</p>}
              <p className="text-sm mt-4">{event.description}</p>
                <button className="text-white bg-blue-500 py-2 my-4 px-3">
                    More Info
                </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  