import Image from 'next/image';
import Header from '@/components/Header';
import NotificationSlice from '@/components/NotificationSlice';
import Panel from '@/components/Panel';
import DownloaderList from '@/components/DownloaderList';

export default function Home() {
    return (
        <main className=''>
            <Header />
            <div className='px-8 py-4 flex justify-between items-center'>
                <div className='flex items-center'>
                    <Image alt='logo' src="/icon.png" width={80} height={80} priority
                        className='hidden sm:block'
                    />
                    <NotificationSlice />
                </div>
                <button className='relative hover:brightness-95 transition
                    bg-main-2 py-1 px-3'>
                    <span className='text-white'>Đăng nhập</span>
                    <Image src={"/ui/human-1.png"} width={200} height={200} alt='human-1.png'
                        className='absolute -top-10 -left-2/3'
                    />
                </button>
            </div>
            <Panel />
            <DownloaderList downloaders={[
                {
                    platformName: "Window 64bit Installer",
                    fileName: "Godgon-0.0.1-dev.exe",
                    url: "/"
                },
                {
                    platformName: "Window 64bit Zip",
                    fileName: "Godgon-0.0.1-dev.zip",
                    url: "/"
                },
                {
                    platformName: "Android",
                    fileName: "Godgon-0.0.1-dev.apk",
                    url: "/"
                }
            ]} />
        </main>
    )
}
