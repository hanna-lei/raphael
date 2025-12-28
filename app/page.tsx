import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const cards = [
        { title: "Raphael", img: "/raphael-photo.png", href: "/raphael" },
        { title: "Rob", img: "/rob-photo.png", href: "/rob" },
        { title: "Raphaelina", img: "/lina-photo.png", href: "/raphaelina" },
        { title: "Santa", img: "/santa-photo.png", href: "/santa" },
    ];

    return (
        <div className="flex flex-col items-center min-h-screen pt-24 pb-12 px-[50pt] text-center">
            <div className="w-full max-w-[1400px] flex flex-col items-center">
                <h1 className="text-8xl font-bold tracking-widest mb-8 mt-12">RAPHAEL</h1>

                <div className="w-full h-px bg-white/20 my-8"></div>

                <p className="text-xl mb-8 max-w-2xl leading-relaxed">
                    blahblahblahblahblahblahblah
                </p>

                <div className="w-full h-px bg-white/20 my-10"></div>

                <div className="flex flex-wrap justify-center gap-x-[50pt] gap-y-[75pt] w-full">
                    {cards.map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group flex flex-col items-center border border-[#FFD700] rounded-xl p-[10pt] transition-all duration-700 ease-out hover:scale-105 hover:bg-[#FFD700]/10"
                        >
                            <div className="relative w-[200pt] aspect-[3/4] overflow-hidden rounded-md">
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-cover transition-all duration-500"
                                />
                            </div>
                            <span className="text-xl font-bold uppercase tracking-wider mt-6 border-b border-transparent group-hover:border-[#FFD700] transition-all pb-1">
                                {card.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
