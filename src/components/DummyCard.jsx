
const DummyCard = () => {
    return (
      <div className="w-[48%] sm:w-[23%] lg:w-[18%] h-[auto] rounded-[18px] cursor-default select-none p-2">
        <div
          className="relative rounded-[18px] w-full"
          style={{
            aspectRatio: '2 / 3', // Assuming typical movie poster ratio for height
            background: 'linear-gradient(135deg, #6b7280 0%, #3b82f6 100%)', // shades of gray to blue gradient
          }}
        >
          {/* Optional animated shimmer or content placeholders */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400 via-sky-800 to-gray-400 animate-pulse rounded-[18px]" />
        </div>
        <div className="mt-2 p-2 space-y-2">
          <div className="h-4 bg-gray-400 rounded w-3/4 animate-pulse"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
    );
  };
  
  export default DummyCard;
  