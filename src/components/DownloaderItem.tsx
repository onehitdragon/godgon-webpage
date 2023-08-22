import Link from "next/link";

function DownloaderItem({ downloader }: { downloader: Downloader }){
    return (
        <li className='flex flex-col items-center my-2'>
            <span className='font-bold'>{downloader.platformName}</span>
            <Link href={downloader.url} className='italic hover:text-main-2 transition'>
                {downloader.fileName}
            </Link>
        </li>
    );
}

export default DownloaderItem;