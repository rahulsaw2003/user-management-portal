import React, { useEffect } from "react";

const Loading = ({ isLoading }) => {


	if (!isLoading) return null;

	return (
		<div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-90 z-50">
			<img src="./loading-spinner.gif" alt="Loading..." className="w-20 h-20 mb-4" />
			<div className="text-white mt-5 text-xl">Loading...</div>
		</div>
	);
};

export default Loading;
