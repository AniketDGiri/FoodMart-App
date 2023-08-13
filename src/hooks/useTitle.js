import { useEffect } from "react";

const useTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} -foodMart`;
  }, [title]);
};

export default useTitle;
