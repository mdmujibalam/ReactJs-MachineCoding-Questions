import React,{useMemo} from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  //console.log(pathname);


const breadcrumbs=useMemo(()=>{
  const pathsArr = pathname.split("/").filter((x) => x);
  return pathsArr.map((name, index) => {
    return {
      name,
      path: "/" + pathsArr.slice(0, index + 1).join("/"),
    };
  })
},[pathname]);

//console.log("breadcrubms", breadcrumbs);

  return (
    <>
      <Link to="/">Home</Link>
      
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <span key={crumb.path}>
            {"/"}

            {isLast ? (
              <span key={crumb.path}>{crumb.name}</span>
            ) : (
              <Link to={crumb.path}>{crumb.name}</Link>
            )}
          </span>
        );
      })}
    </>
  );
};

export default Breadcrumbs;
