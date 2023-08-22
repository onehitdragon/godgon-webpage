import Image from 'next/image';
import localFont from "next/font/local";
import Link from 'next/link';

const myFont = localFont({ src: "../font/DragonHunter.otf" });

function Header(){
    return (
        <div className="bg-black text-white flex items-center px-8">
            <ul className='flex md:w-2/5'>
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
                <li>
                    <Link href='#downloaderlist'>
                        <button className='px-4 py-2 hover:bg-main hover:text-black transition'>
                            Tải về

                        </button>
                    </Link>
                </li>
            </ul>
            <span className={`flex-1 text-xl ${myFont.className} text-center hidden sm:inline`}>
                GODGON
            </span>
            <div className='hidden md:flex items-center w-2/5 justify-end'>
                <a href="https://www.youtube.com/channel/UClN-6RYy1Dvr1eAUTqn8HgQ"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='mx-1 hover:opacity-80 transition'
                    >
                    <Image src="/icons/youtube.png" alt='youtube.png'
                        width={25} height={25}/>
                </a>
                <a href="https://discord.gg/JeJ2nV8X"
                    target="_blank"
                    className='mx-1 hover:opacity-80 transition'
                    >
                    <Image src="/icons/discord.png" alt='discord.png'
                        width={25} height={25}/>
                </a>
                <a href="https://github.com/onehitdragon"
                    target="_blank"
                    className='ml-1 hover:opacity-80 transition'
                    >
                <Image src="/icons/github.png" alt='github.png'
                    width={25} height={25}/>
                </a>
            </div>
        </div>
    );
}

export default Header;