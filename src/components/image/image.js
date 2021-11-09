import React from "react";
import { useState } from "react";
import Spinner from "../spinner/spinner";

const Image = ({ src, alt, style }) => {
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: loading ? "flex" : "none",
          width: "16rem",
          height: "16rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner />
      </div>
      <div
        style={{
          display: loading ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img key={src} src={src} alt={alt} onLoad={imageLoaded} style={style} />
      </div>
    </React.Fragment>
  );
};

export default Image;
