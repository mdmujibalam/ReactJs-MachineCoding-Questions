import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  //console.log(pathname);
  const pathsArr = pathname.split("/").filter((x) => x);
  //console.log(pathsArr);
  let breadcrumbPath = "";

  return (
    <>
      <Link to="/">Home</Link>
      {pathsArr.map((name, index) => {
        breadcrumbPath += `/${name}`;
        const isLast = index === pathsArr.length - 1;

        return isLast ? (
          <span key={index}>/{name}</span>
        ) : (
          <span key={index}>
            /<Link to={breadcrumbPath}>{name}</Link>
          </span>
        );

        //return <span key={index}>/{name}</span>
      })}
    </>
  );
};

export default Breadcrumbs;
