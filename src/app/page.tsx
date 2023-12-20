import Image from 'next/image';

type Card = {
  alt: string;
  height: number;
  key: string;
  src: string;
  width: number;
};

const cards: Card[] = [
  {
    alt: 'Brayton Dark Reanimator',
    height: 1100,
    key: 'brayton',
    src: '/images/Brayton-Dark-Reanimator.png',
    width: 785,
  },
  {
    alt: 'Charles Shadowblade',
    height: 1100,
    key: 'charles',
    src: '/images/Charles-Shadowblade.png',
    width: 785,
  },
  {
    alt: 'Cory Frostweaver',
    height: 1100,
    key: 'cory',
    src: '/images/Cory-Frostweaver.png',
    width: 785,
  },
  {
    alt: 'Howard Grove Warden',
    height: 1100,
    key: 'howard',
    src: '/images/Howard-Grove-Warden.png',
    width: 785,
  },
  {
    alt: 'Rich Ironbane',
    height: 1100,
    key: 'rich',
    src: '/images/Rich-Ironbane.png',
    width: 785,
  },
];

export default function Home() {
  return (
    <main className="bg-black h-full">
      <h1 className="text-white text-5xl pt-24 pb-6 text-center md:text-7xl lg:text-9xl">
        A Gift to the Best Guys I Know
      </h1>
      <h3 className="text-gray-500 pb-12 text-2xl text-center md:text-5xl lg:text-7xl">
        Christmas 2023
      </h3>
      <section className="flex flex-wrap gap-12 justify-center">
        {cards.map((card: Card) => {
          return (
            <div className="w-[785px]" key={card.key}>
              <div className="relative">
                <Image
                  alt={card.alt}
                  height={card.height}
                  src={card.src}
                  width={card.width}
                />
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
