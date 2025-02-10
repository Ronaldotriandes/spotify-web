import { PlayIcon } from 'lucide-react';
import Image from 'next/image';
interface SongCard {
    id: number;
    title: string;
    coverImage: string;
}

const songs: SongCard[] = [
    {
        id: 1,
        title: "Netflix Playlist",
        coverImage: "/image/playlist2.png",
    },
    {
        id: 2,
        title: "First Person Shooter",
        coverImage: "/image/playlist1.png",
    },
    {
        id: 3,
        title: "Cruel Summer",
        coverImage: "/image/playlist2.png",
    },
    {
        id: 4,
        title: "Paint The Town Red",
        coverImage: "/image/playlist1.png",
    },
];

export default function LikeCards() {
    return (
        <>
            <div className='mb-8'>

                <h1 className="text-2xl font-bold mb-6">Good Afternoon</h1>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {songs.map((song) => (
                        <div
                            key={song.id}
                            className="group bg-[#303030] rounded-md  hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative w-full">
                                <div className='flex flex-row'>
                                    <Image
                                        src={song.coverImage}
                                        alt={song.title}
                                        width={80}
                                        height={80}
                                        className="w-20 rounded-md"
                                    />
                                    <div className='flex p-2 justify-center items-center'>
                                        <span><b>{song.title}</b></span>
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="bg-green-500 rounded-full p-3 hover:scale-105 transition-transform shadow-xl">
                                        <PlayIcon className="w-6 h-6 text-black" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
