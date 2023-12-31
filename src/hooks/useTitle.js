import { useEffect, useState } from "react";

export const useTitle = () => {
  const [title, setTitle] = useState(null);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };

  useEffect(updateTitle, [title]);

  return { setTitle };
};
