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
        <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center max-w-5xl mx-auto">
            <h1 className="text-8xl font-bold tracking-widest mb-8 mt-12">RAPHAEL</h1>

            <div className="w-full h-px bg-white/20 my-8"></div>

            <p className="text-xl mb-8 max-w-2xl leading-relaxed">
                blahblahblahblahblahblahblah
            </p>

            <div className="w-full h-px bg-white/20 my-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                {cards.map((card) => (
                    <Link
                        key={card.title}
                        href={card.href}
                        className="group flex flex-col items-center gap-4 transition-transform hover:scale-105"
                    >
                        <div className="relative w-[200pt] aspect-[3/4] overflow-hidden border border-white/20">
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                className="object-cover transition-all duration-500"
                            />
                        </div>
                        <span className="text-xl font-bold uppercase tracking-wider border-b border-transparent group-hover:border-white transition-all pb-1">
                            {card.title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
