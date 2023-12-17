import DownloaderList from '@/components/DownloaderList';

export default function Home() {
    return (
        <DownloaderList downloaders={[
            {
                platformName: "Window 64bit Installer",
                fileName: "Godgon-0.0.1-dev.exe",
                url: "/apps/godgon-0.0.1-dev.exe"
            },
            {
                platformName: "Window 64bit Zip",
                fileName: "Godgon-0.0.1-dev.zip",
                url: "/apps/godgon-0.0.1-dev.zip"
            },
            {
                platformName: "Android",
                fileName: "Godgon-0.0.1-dev.apk",
                url: "/apps/godgon-0.0.1-dev.apk"
            }
        ]} />
    )
}
