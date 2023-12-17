import Image from 'next/image';
import NotificationSlice from '@/components/Notification/NotificationSlice';
import logo from "@/images/logo.png";
import human1 from "@/images/ui/human-1.png";
import Link from 'next/link';

function NotificationBar(){
    return (
        <div className='px-2 sm:px-8 py-4 flex justify-between items-center'>
            <div className='flex items-center'>
                <Image alt='logo' src={logo} priority
                    className='mr-3 w-0 h-12 sm:w-20 sm:h-20'
                />
                <NotificationSlice />
            </div>
            <Link href="/login">
                <button className='hover:brightness-95 transition
                    bg-main-2 py-1 px-3 relative'>
                    <span className='text-white'>Đăng nhập</span>
                    <Image src={human1} alt='human-1.png'
                        className='absolute top-1/2 -translate-y-1/2 -translate-x-2/3 w-20 sm:w-28'
                    />
                </button>
            </Link>
        </div>
    );
}

export default NotificationBar;