const DashboardUI = ({language, timeFrame, percentage, problem}) => {

    return (
        <div className="bg-gray-800 text-white p-6 max-w-4xl mx-auto rounded-lg shadow-lg">
            <div className="flex justify-between">
                <div className="flex-1 mr-5">
                    <div className="bg-gray-800 text-white p-1 max-w-xl mx-auto mb-5 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-300">Sadman Arif Wamim</h2>
                    </div>
                    <div className="bg-gray-800 text-white p-1 max-w-l mx-auto rounded-lg shadow-lg">
                        <p className="text-l font-bold text-red-600">Total Problem Solved: {problem? problem[0].count : null}</p>
                        <div className="flex justify-between">
                            <div className="flex-1">
                                <p className="text-l font-bold text-red-400">{problem? problem[1].difficulty : null}</p>
                                <p className="text-l font-bold text-red-500">{problem? problem[2].difficulty : null}</p>
                                <p className="text-l font-bold text-red-600">{problem? problem[3].difficulty : null}</p>
                            </div>
                            <div className="flex-1">
                                <p className="text-l font-bold text-red-400">{problem? problem[1].count : null}</p>
                                <p className="text-l font-bold text-red-500">{problem? problem[2].count : null}</p>
                                <p className="text-l font-bold text-red-600">{problem? problem[3].count : null}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 mr-5">
                <div className="bg-gray-800 text-white p-1 max-w-xl mx-auto mb-5 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-800">1</h2>
                    </div>
                <div className="bg-gray-800 text-white p-1 max-w-l mx-auto rounded-lg shadow-lg">
                        <p className="text-l font-bold text-red-600">Timeline:</p>
                        <div className="flex justify-between">
                            <div className="flex-2">
                                <p className="text-l font-bold text-yellow-400">Active Years: {timeFrame? timeFrame.activeYears.join(', ') : null}</p>
                                <p className="text-l font-bold text-yellow-500">Streak: {timeFrame? timeFrame.streak : null}</p>
                                <p className="text-l font-bold text-yellow-600">TotalActiveDays: {timeFrame? timeFrame.totalActiveDays : null}</p>
                            </div>
                        </div>
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
