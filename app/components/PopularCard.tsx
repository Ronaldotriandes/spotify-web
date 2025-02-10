import { PlayIcon } from 'lucide-react';
import Image from 'next/image';
interface SongCard {
    id: number;
    title: string;
    artist: string;
    coverImage: string;
    plays: string;
}

const songs: SongCard[] = [
    {
        id: 1,
        title: "Standing Next to You",
        artist: "Jung Kook",
        coverImage: "/image/playlist2.png",
        plays: "2.3M plays"
    },
    {
        id: 2,
        title: "First Person Shooter",
        artist: "Drake, J. Cole",
        coverImage: "/image/playlist1.png",
        plays: "1.8M plays"
    },
    {
        id: 3,
        title: "Cruel Summer",
        artist: "Taylor Swift",
        coverImage: "/image/playlist2.png",
        plays: "3.1M plays"
    },
    {
        id: 4,
        title: "Paint The Town Red",
        artist: "Doja Cat",
        coverImage: "/image/playlist1.png",
        plays: "1.5M plays"
    },
];

export default function PopularCards() {
    return (
        <>
            <h1 className="text-2xl font-bold mb-6">Popular Tracks</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {songs.map((song) => (
                    <div
                        key={song.id}
                        className="group bg-zinc-800/40 rounded-md p-4 hover:bg-zinc-800 transition-all duration-300 cursor-pointer"
                    >
                        <div className="relative">
                            <div className="relative aspect-square mb-4">
                                <Image
                                    src={song.coverImage}
                                    alt={song.title}
                                    fill
                                    className="object-cover rounded-md"
                                />
                                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="bg-green-500 rounded-full p-3 hover:scale-105 transition-transform shadow-xl">
                                        <PlayIcon className="w-6 h-6 text-black" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <h2 className="font-semibold text-white truncate">
                                {song.title}
                            </h2>
                            <p className="text-sm text-zinc-400 truncate">
                                {song.artist}
                            </p>
                            <p className="text-xs text-zinc-500">
                                {song.plays}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
