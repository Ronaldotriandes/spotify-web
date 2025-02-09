import Sidebar from './components/Sidebar';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-zinc-900 text-white">
        {/* Main content goes here */}
      </main>
    </div>
  );
}
