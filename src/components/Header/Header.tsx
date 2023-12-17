import Image from 'next/image';
import localFont from "next/font/local";
import discordIcon from "@/images/icons/discord.png";
import youtubeIcon from "@/images/icons/youtube.png";
import githubIcon from "@/images/icons/github.png";
import HeaderResposiveMenu from './HeaderResposiveMenu';
import Menu from './Menu';

const myFont = localFont({ src: "../../font/DragonHunter.otf" });

function Header(){
    return (
        <div className="bg-black text-white flex items-center px-2 sm:px-8">
            <HeaderResposiveMenu />
            <Menu 
                className="hidden sm:flex"
                buttonClassName="px-4 py-2 hover:bg-main hover:text-black transition"
            />
            <span className={`flex-1 text-xl ${myFont.className} text-center`}>
                GODGON
            </span>
            <div className='hidden md:flex w-fit items-center justify-end'>
                <a href="https://www.youtube.com/channel/UClN-6RYy1Dvr1eAUTqn8HgQ"
                    target="_blank"
                    rel='noopener noreferrer'
                    className='mx-1 hover:opacity-80 transition'
                    >
                    <Image src={youtubeIcon} alt='youtube.png'
                        className='w-5 h-5'/>
                </a>
                <a href="https://discord.gg/JeJ2nV8X"
                    target="_blank"
                    className='mx-1 hover:opacity-80 transition'
                    >
                    <Image src={discordIcon} alt='discord.png'
                        className='w-5 h-5'/>
                </a>
                <a href="https://github.com/onehitdragon"
                    target="_blank"
                    className='ml-1 hover:opacity-80 transition'
                    >
                <Image src={githubIcon} alt='github.png'
                    className='w-5 h-5'/>
                </a>
            </div>
        </div>
    );
}

export default Header;