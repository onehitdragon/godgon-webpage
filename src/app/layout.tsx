import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/Header/Header';
import Panel from '@/components/Panel';
import NotificationBar from '@/components/Notification/NotificationBar';
import StoreProvider from '../components/StoreProvider';
import Dialog from '@/components/Dialog/Dialog';
import AuthWrap from '@/components/Auth/AuthWrap';

export const metadata: Metadata = {
    title: 'Godgon - Trang chủ',
    description: 'Tham gia vào thế giới thần tiên, làm nhiệm vụ, tiêu diệt quái vật, săn khó báu',
    keywords: "goddragon, godgon, game, rpg, top-down game, tile-based game, long tinh 2, world land, trò chơi, nhập vai"
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className='overflow-hidden'>
            <body className='w-screen h-screen overflow-hidden overflow-y-auto'>
                <StoreProvider>
                    <main>
                        <AuthWrap />
                        <Dialog />
                        <Header />
                        <NotificationBar />
                        <Panel />
                        {children}
                    </main>
                </StoreProvider>
            </body>
        </html>
    )
}
