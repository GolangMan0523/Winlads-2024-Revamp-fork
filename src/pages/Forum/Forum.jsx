import React, { useEffect, useState } from "react";
import UnderDev from "../../components/UnderDevMessage/UnderDev";

const Forum = () => {
  const [isUnderDev, setIsUnderDev] = useState(true);

  if (isUnderDev) {
    return <UnderDev />;
  } else {
    return <div>Forum</div>;
  }
};

export default Forum;
