import Image from 'next/image';
import NotificationSlice from '@/components/Notification/NotificationSlice';
import logo from "@/images/logo.png";
import LoginButton from './LoginButton';

function NotificationBar(){
    return (
        <div className='px-2 sm:px-8 py-4 flex justify-between items-center'>
            <div className='flex items-center'>
                <Image alt='logo' src={logo} priority
                    className='mr-3 w-0 h-12 sm:w-20 sm:h-20'
                />
                <NotificationSlice />
            </div>
            <LoginButton />
        </div>
    );
}

export default NotificationBar;