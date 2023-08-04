import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Godgon - Trang chủ',
  description: 'Tham gia vào thế giới thần tiên, làm nhiệm vụ, tiêu diệt quái vật, săn khó báu',
  keywords: "game, rpg, top-down game, tile-based game, long tinh 2, long tinh lau, trò chơi, nhập vai, goddragon, godgon"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
