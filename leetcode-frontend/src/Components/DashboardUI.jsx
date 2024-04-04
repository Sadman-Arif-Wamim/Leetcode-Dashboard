const DashboardUI = () => {
    return (
        <div className="bg-gray-800 text-white p-6 max-w-3xl mx-auto rounded-lg shadow-lg">
            <div className="flex justify-between">
                <div className="flex-1 mr-5">
                    <div className="bg-gray-700 text-white p-1 max-w-xl mx-auto mb-5 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">Sadman Arif Wamim</h2>
                    </div>
                    <div className="bg-gray-700 text-white p-1 max-w-l mx-auto rounded-lg shadow-lg">
                        <p className="text-xl font-bold">Problem Solved</p>
                        <p className="text-l font-bold">Easy: </p>
                        <p className="text-l font-bold">Medium: </p>
                        <p className="text-l font-bold">Hard: </p>
                    </div>
                </div>
                <div className="flex-1 mr-5">
                <div className="bg-gray-700 text-white p-1 max-w-xl mx-auto mb-5 rounded-lg shadow-lg">
                    <h2 className="grow text-xl font-semibold">Difficulty Breakdown</h2>
                    <ul>
                        <li>Easy: <span className="font-bold">{10}%</span></li>
                        <li>Medium: <span className="font-bold">{20}%</span></li>
                        <li>Hard: <span className="font-bold">{20}%</span></li>
                    </ul>
                    </div>
                </div>
                <div className="flex-1">
                <h2 className="grow text-xl font-semibold">Difficulty Breakdown</h2>
                    <ul>
                        <li>Easy: <span className="font-bold">{10}%</span></li>
                        <li>Medium: <span className="font-bold">{20}%</span></li>
                        <li>Hard: <span className="font-bold">{20}%</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DashboardUI;
