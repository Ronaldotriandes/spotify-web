import { Home, Library, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export default function Sidebar() {
    return (
        <aside className="w-64 bg-black h-screen p-6">
            <div className="space-y-6">
                <div className="mb-8">
                    <Image
                        src="/image/Spotify logo.png"
                        alt="Spotify"
                        width={130}
                        height={40}
                        className="text-white"
                    />
                </div>

                <nav className="space-y-4">
                    <Link
                        href="/"
                        className="flex items-center gap-4 text-gray-400 hover:text-white transition"
                    >
                        <Home size={24} />
                        <span>Home</span>
                    </Link>

                    <Link
                        href="/search"
                        className="flex items-center gap-4 text-gray-400 hover:text-white transition"
                    >
                        <Search size={24} />
                        <span>Search</span>
                    </Link>

                    <Link
                        href="/library"
                        className="flex items-center gap-4 text-gray-400 hover:text-white transition"
                    >
                        <Library size={24} />
                        <span>Your Library</span>
                    </Link>
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-800">
                    <div className="space-y-4">
                        <button className="w-full text-left text-gray-400 hover:text-white transition">
                            Playlist 1
                        </button>
                        <button className="w-full text-left text-gray-400 hover:text-white transition">
                            Playlist 2
                        </button>
                        <button className="w-full text-left text-gray-400 hover:text-white transition">
                            Liked Songs
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    )
}
