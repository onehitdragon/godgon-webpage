function Loading(){
    return (
        <main className="flex justify-center">
            <div className="flex flex-col justify-center items-start py-8
                w-48 sm:w-64 md:w-72 animate-pulse">
                <div className="flex mb-4 w-full">
                    <div className="w-full h-6 py-1 bg-slate-700"></div>
                </div>
                <div className="flex mb-4 w-full relative">
                    <div className="w-full h-6 py-1 bg-slate-700"></div>
                </div>
                <div className="flex mb-4 w-full relative">
                    <div className="w-full h-6 py-1 bg-slate-700"></div>
                </div>
                <div className="flex mb-4">
                    <div className=' bg-slate-700 w-28 h-8 flex justify-center items-center'>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Loading;