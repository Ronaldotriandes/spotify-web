'use client'
import { Laptop2, Play, SkipBack, SkipForward, Volume2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Footer() {
    const [showTooltip, setShowTooltip] = useState(true)

    return (
        <footer className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-700 ">
            <div>
                <div className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/image/playlist1.png"
                            width={56}
                            height={56}
                            alt="Album cover"
                        />
                        <div>
                            <h4 className="text-sm font-semibold">First Person Shooter</h4>
                            <p className="text-xs text-zinc-400">Drake, J. Cole</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="flex items-center gap-6">
                            <button className="text-zinc-200 hover:text-white">
                                <SkipBack size={20} />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:scale-105">
                                <Play size={20} />
                            </button>
                            <button className="text-zinc-200 hover:text-white">
                                <SkipForward size={20} />
                            </button>
                        </div>
                        <div className="w-96 h-1 rounded-full bg-zinc-600">
                            <div className="w-1/3 h-1 rounded-full bg-white"></div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 text-zinc-400 hover:text-white cursor-pointer relative"
                            onClick={() => setShowTooltip(!showTooltip)}
                        >
                            <Laptop2 size={16} color={showTooltip ? 'green' : 'white'} />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <Volume2 size={20} />
                        <div className="w-24 h-1 rounded-full bg-zinc-600">
                            <div className="w-1/2 h-1 rounded-full bg-white"></div>
                        </div>
                    </div>

                </div>
                <div className="relative">
                    {showTooltip && (
                        <div className='top-0 left-0 right-0 border-t border-zinc-700 px-4 py-2 bg-green-500 text-white text-sm font-medium flex items-center justify-center gap-2 cursor-pointer'
                        >
                            <div className="absolute top-[-4px] right-36 transform -translate-x-1/2 w-2 h-2 bg-green-500 rotate-45"></div>
                            Listening on DESKTOP-XYZ
                        </div>
                    )}
                    {/* <div
                        className='bottom-0 left-0 right-0 border-t border-zinc-700 px-4 py-2 bg-green-500 text-white text-sm font-medium flex items-center justify-center gap-2 cursor-pointer'
                    >
                        Listening on DESKTOP-XYZ
                        <ChevronUp size={16} />
                    </div> */}
                </div>
            </div>


        </footer>
    )
}
