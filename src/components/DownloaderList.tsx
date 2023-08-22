import DownloaderItem from "./DownloaderItem";

function DownloaderList({ downloaders }: { downloaders: Downloader[] }){
    return (
        <ul id="downloaderlist" className='flex flex-col my-4'>
            {
                downloaders.map((downloader) => {
                    return (
                        <DownloaderItem key={downloader.platformName} downloader={downloader}/>
                    );
                })
            }
        </ul>
    );
}

export default DownloaderList;