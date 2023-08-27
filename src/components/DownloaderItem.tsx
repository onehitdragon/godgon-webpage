function DownloaderItem({ downloader }: { downloader: Downloader }){
    return (
        <li className='flex flex-col items-center my-2'>
            <span className='font-bold'>{downloader.platformName}</span>
            <a href={downloader.url} className='italic hover:text-main-2 transition' target="_blank">
                {downloader.fileName}
            </a>
        </li>
    );
}

export default DownloaderItem;