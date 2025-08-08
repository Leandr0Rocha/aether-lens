import Arrow from "./Arrow";

function PrevArrow(props) {
  return (
    <Arrow {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-3 sm:w-3 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 19l-7-7 7-7" />
      </svg>
    </Arrow>
  );
}

export default PrevArrow;