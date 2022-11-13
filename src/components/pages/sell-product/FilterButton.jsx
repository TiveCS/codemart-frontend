export default function FilterButton(props) {
  return (
    <button
      onClick={(event) => props.handleDelete(event, props.children)}
      className="flex flex-row text-xs justify-between items-center bg-recandy-blue-600 text-recandy-white-0 px-4 py-2 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-4 h-4 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      {props.children}
    </button>
  );
}
