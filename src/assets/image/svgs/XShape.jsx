export const XShape = (color) => {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M103.432 75L146.075 32.3565C151.308 27.1236 151.308 18.6392 146.075 13.402L136.598 3.92472C131.365 -1.30824 122.881 -1.30824 117.643 3.92472L75 46.5682L32.3565 3.92472C27.1236 -1.30824 18.6392 -1.30824 13.402 3.92472L3.92472 13.402C-1.30824 18.6349 -1.30824 27.1193 3.92472 32.3565L46.5682 75L3.92472 117.643C-1.30824 122.876 -1.30824 131.361 3.92472 136.598L13.402 146.075C18.6349 151.308 27.1236 151.308 32.3565 146.075L75 103.432L117.643 146.075C122.876 151.308 131.365 151.308 136.598 146.075L146.075 136.598C151.308 131.365 151.308 122.881 146.075 117.643L103.432 75Z"
        fill={color ? color : "#DC3035"}
      />
    </svg>
  );
};
