import Footer from './components/Footer';
import LikeCards from './components/LikeSongCard';
import PopularCards from './components/PopularCard';
import Sidebar from './components/Sidebar';
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
  // Add more songs as needed
];

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-zinc-900 text-white p-8 overflow-y-auto">
        <div className="flex flex-col">
          <LikeCards />
          <PopularCards />
        </div>
      </main>
      <Footer />
    </div>
  );
}

