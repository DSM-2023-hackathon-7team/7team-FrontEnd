export const Heart = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1766 2.11873C17.1163 0.92039 15.7108 0.188989 14.2139 0.0566496C12.7171 -0.0756902 11.2276 0.399756 10.0145 1.39711C8.74187 0.330042 7.15781 -0.153816 5.58133 0.0429696C4.00486 0.239755 2.55308 1.10257 1.51835 2.45766C0.483624 3.81275 -0.0571979 5.55945 0.00479662 7.34604C0.0667912 9.13262 0.726997 10.8264 1.85246 12.0862L8.06404 19.0995C8.58419 19.6766 9.28474 20 10.0145 20C10.7443 20 11.4449 19.6766 11.965 19.0995L18.1766 12.0862C19.3445 10.7617 20 8.96999 20 7.10247C20 5.23495 19.3445 3.4433 18.1766 2.11873ZM16.7663 10.5302L10.5547 17.5322C10.484 17.6127 10.3999 17.6766 10.3072 17.7201C10.2144 17.7637 10.115 17.7862 10.0145 17.7862C9.91409 17.7862 9.81464 17.7637 9.72192 17.7201C9.62921 17.6766 9.54509 17.6127 9.4744 17.5322L3.26282 10.4964C2.47838 9.59248 2.03912 8.37825 2.03912 7.11375C2.03912 5.84925 2.47838 4.63502 3.26282 3.73112C4.06218 2.84148 5.14027 2.34263 6.26359 2.34263C7.3869 2.34263 8.46499 2.84148 9.26435 3.73112C9.35734 3.8368 9.46796 3.92069 9.58986 3.97793C9.71175 4.03517 9.84248 4.06465 9.97453 4.06465C10.1066 4.06465 10.2373 4.03517 10.3592 3.97793C10.4811 3.92069 10.5917 3.8368 10.6847 3.73112C11.4841 2.84148 12.5622 2.34263 13.6855 2.34263C14.8088 2.34263 15.8869 2.84148 16.6862 3.73112C17.4815 4.62318 17.9351 5.83082 17.9501 7.09535C17.9651 8.35989 17.5401 9.58074 16.7663 10.4964V10.5302Z"
        fill={color ? color : "#000000"}
      />
    </svg>
  );
};
