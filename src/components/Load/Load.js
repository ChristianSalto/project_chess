import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';


const Load = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div >
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
}


export default Load;



