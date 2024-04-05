const DashboardUI = ({ language, timeFrame, percentage, problem, badges }) => {

    const badgeIcons = badges || [
        // Add more badge paths as needed
    ];

    const languageIconMap = {
        'JavaScript': '../../leetcode-frontend/public/Assets/python.svg', // Replace with actual path to the JavaScript icon
        'Python3': '/path/to/python-icon.png' // Replace with actual path to the Python icon
        // Add more mappings as needed
    };

    return (
        <div className="bg-gray-800 text-white p-6 max-w-4xl mx-auto rounded-lg shadow-lg">
            <div className="flex justify-between">
                <div className="flex-1 mr-5">
                    <div className="bg-gray-800 text-white p-1 max-w-xl mx-auto mb-5 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-gray-300">Sadman Arif Wamim</h2>
                    </div>
                    <div className="bg-gray-800 text-white p-1 max-w-l mx-auto rounded-lg shadow-lg">
                        <p className="text-l font-bold text-red-600">Total Problem Solved: {problem ? problem[0].count : null}</p>
                        <div className="flex justify-between">
                            <div className="flex-1">
                                <p className="text-l font-bold text-red-400">{problem ? problem[1].difficulty : null}</p>
                                <p className="text-l font-bold text-red-500">{problem ? problem[2].difficulty : null}</p>
                                <p className="text-l font-bold text-red-600">{problem ? problem[3].difficulty : null}</p>
                            </div>
                            <div className="flex-1">
                                <p className="text-l font-bold text-red-400">{problem ? problem[1].count : null}</p>
                                <p className="text-l font-bold text-red-500">{problem ? problem[2].count : null}</p>
                                <p className="text-l font-bold text-red-600">{problem ? problem[3].count : null}</p>
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
                                <p className="text-l font-bold text-yellow-400">Active Years: {timeFrame ? timeFrame.activeYears.join(', ') : null}</p>
                                <p className="text-l font-bold text-yellow-500">Streak: {timeFrame ? timeFrame.streak : null}</p>
                                <p className="text-l font-bold text-yellow-600">TotalActiveDays: {timeFrame ? timeFrame.totalActiveDays : null}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex-1 mt-5">
                    <div className="absolute -top-3.5 bg-red-500 px-2 py-1 rounded-r-full text-xs font-semibold uppercase text-white">
                        Badges
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg shadow-lg border-t-4 border-red-500">
                        <div className="grid grid-cols-4 gap-4">
                            {badgeIcons.map((badge, index) => (
                                <div key={index} className="flex flex-col items-center justify-center">
                                    <img src={badge} alt={`Badge ${index + 1}`} className="w-8 h-8" />
                                </div>
                            ))} 
                        </div>
                    </div>
                    <div className="bg-gray-700 p-4 rounded-lg shadow-lg border-t-4 border-blue-500 relative mt-4">
                        <div className="absolute -top-3.5 left-2 bg-blue-500 px-2 py-1 rounded-r-full text-xs font-semibold uppercase text-white">Top Languages</div>
                        <div className="grid grid-cols-4 gap-4">
                            {language.map((lang) => (
                                <div key={lang.languageName} className="flex flex-col items-center justify-center">
                                    <img src={languageIconMap[lang.languageName]} alt={lang.languageName} className="w-8 h-8" />
                                    <span className="text-xs mt-1">{lang.problemsSolved}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardUI;
