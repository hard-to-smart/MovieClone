import React, { useEffect } from 'react';
import { getVideoUrl } from '../ApiUrlRecord';

const Iframe = ({ videoKey, setSelectedVideo }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  return (
    <>
      {/* Dark background overlay */}
      <div className="fixed inset-0 z-50 bg-black bg-opacity-70" />

      {/* Modal content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl h-[60vh]">
          <button
            className="absolute top-2 right-2 z-50 text-white text-xl bg-black bg-opacity-50 px-3 py-1 rounded hover:bg-opacity-80"
            onClick={() => setSelectedVideo(false)}
          >
            ✕
          </button>
          <iframe
            src={getVideoUrl(videoKey)}
            title="abc"
            allowFullScreen
            className="w-full h-full border-2 border-white rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Iframe;
