const { useState, useEffect } = require("react");

const useBike = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    fetch`generated .json`
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  return [bikes, setBikes];
};

export default useBike;
