import React from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterFeed = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "Marko_Bezic",
        }}
        options={{
          height: "500",
        }}
      />
    </div>
  );
};

export default TwitterFeed;
