import React from "react";
import background from "../img/home/ExpandGlam_7_1440x810_9f525c76-5b90-4861-93a5-c5e1d804e9cd.webp";
import { Parallax } from "react-parallax";

function StoryHome() {
  return (
    <div className="story-img" style={{ backgroundImage: `url(${background})` }}>
      <Parallax bgImage={background} bgImageAlt="" strength={-200}>
        <div className="parallax-story" style={{ height: "700px" }}>
          <h5 className="h-parallax">We build better bikes.</h5>
        </div>
      </Parallax>
    </div>
  );
}

export default StoryHome;
