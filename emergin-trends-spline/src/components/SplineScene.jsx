import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  const splineRef = useRef(null);

  const handleLoad = (splineApp) => {
    splineRef.current = splineApp;
  };

  const handleClick = () => {
    if (!splineRef.current) return;
    splineRef.current.emitEvent('mouseDown', 'sBtn1');
  };

  return (
    <div>
      <Spline
      style={{width: '50vw', height: '50vh', position:'absolute', top:'0px', left:'0px', zIndex:'0'}}
        scene="https://prod.spline.design/18x2kkA3jRxG0Fc7/scene.splinecode"
        onLoad={handleLoad}
      />
      <button onClick={handleClick}>Play Animation</button>
    </div>
  );
}
