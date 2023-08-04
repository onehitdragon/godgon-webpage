import Image from 'next/image';
import localFont from "next/font/local";
import Link from 'next/link';

const myFont = localFont({ src: "./font/DragonHunter.otf" });

export default function Home() {
  return (
    <main className=''>
      {/* header */}
      <div className="bg-black text-white flex items-center px-8">
        <ul className='flex w-2/5'>
          <li>
            <button className='px-4 py-2 hover:bg-main hover:text-black transition'>
              Trang chủ
            </button>
          </li>
          <li>
            <button className='px-4 py-2 hover:bg-main hover:text-black transition'>
              Đăng ký
            </button>
          </li>
          <li>
            <button className='px-4 py-2 hover:bg-main hover:text-black transition'>
              Hướng dẫn
            </button>
          </li>
        </ul>
        <span className={`flex-1 text-xl ${myFont.className} text-center`}>
          GODGON
        </span>
        <div className='flex items-center w-2/5 justify-end'>
          <button className='mx-1 hover:opacity-80 transition'>
            <Image src="/icons/youtube1.png" alt='youtube.png'
              width={25} height={25}/>
          </button>
          <button className='mx-1 hover:opacity-80 transition'>
            <Image src="/icons/discord.png" alt='discord.png'
              width={25} height={25}/>
          </button>
          <button className='ml-1 hover:opacity-80 transition'>
            <Image src="/icons/github.png" alt='github.png'
              width={25} height={25}/>
          </button>
        </div>
      </div>
      <div className='px-8 py-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <Image alt='logo' src="/icon.png" width={80} height={80} priority/>
          {/* notificate */}
          <div className='flex items-center ml-3 '>
            <Image src={"/ui/notifi.png"} width={25} height={25} alt='notifi.png'/>
            <div className='w-48 overflow-hidden'>
              <span className='whitespace-nowrap text-sm block -translate-x-7
                italic'>
                Thông báo: Chào mừng đến với godgon
              </span>
            </div>
          </div>
        </div>
        <button className='relative hover:brightness-95 transition
          bg-main-2 py-1 px-3'>
          <span className='text-white'>Đăng nhập</span>
          <Image src={"/ui/human-1.png"} width={200} height={200} alt='human-1.png'
            className='absolute -top-10 -left-2/3'/>
        </button>
      </div>
      {/* slide */}
      <div className='relative'>
        <Image alt='sidebg' src="/widebg.jpg"
          width={0} height={0} sizes='100vw' className='h-full w-auto'/>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          font-bold text-xl text-white'>
          <span>5:48 PM</span>
        </div>
      </div>
      {/* download */}
      <ul className='flex justify-center my-4'>
        <li className='flex flex-col items-center'>
          <span className='font-bold'>Window 64bit</span>
          <Link href="/" className='italic hover:text-main-2 transition'>
            Godgon-0.0.1-dev.exe
          </Link>
        </li>
      </ul>
    </main>
  )
}
