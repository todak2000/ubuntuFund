"use client";

import { useEffect, useState } from "react";

interface TimeAgoProps {
  timestamp: number; // Unix timestamp in milliseconds
}

const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const updateTimeAgo = () => {
      const now = Date.now();
      const secondsPast = (now - timestamp) / 1000;
      if (secondsPast < 60) {
        setTimeAgo(`${Math.round(secondsPast)}s ago`);
      } else if (secondsPast < 3600) {
        setTimeAgo(`${Math.round(secondsPast / 60)}m ago`);
      } else if (secondsPast < 86400) {
        setTimeAgo(`${Math.round(secondsPast / 3600)}h ago`);
      } else if (secondsPast < 604800) {
        setTimeAgo(`${Math.round(secondsPast / 86400)}d ago`);
      } else {
        setTimeAgo(`${new Date(timestamp).toLocaleDateString()}`);
      }
    };

    const intervalId = setInterval(updateTimeAgo, 60000); // Update every minute
    updateTimeAgo(); // Initial update

    return () => clearInterval(intervalId);
  }, [timestamp]);

  return <div className="text-gray-600">{timeAgo}</div>;
};

export default TimeAgo;
