import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene2() {
  const splineRef = useRef(null);

  const handleLoad = (splineApp) => {
    splineRef.current = splineApp;
  };

  const handleButton1 = () => {
    if (!splineRef.current) return;
    splineRef.current.emitEvent('mouseDown', 'sBtn1');
  };

  const handleButton2 = () => {
    if (!splineRef.current) return;
    splineRef.current.emitEvent('mouseDown', 'sBtn2');
  };

  const handleButton3 = () => {
    if (!splineRef.current) return;
    splineRef.current.emitEvent('mouseDown', 'sBtn3');
  };

  const handleButton4 = () => {
    if (!splineRef.current) return;
    splineRef.current.emitEvent('mouseDown', 'sBtn4');
  };

  const handleButton5 = () => {
    if (!splineRef.current) return;
    splineRef.current.emitEvent('mouseDown', 'sBtn5');
  };

  const handleButton6 = () => {
    if (!splineRef.current) return;
    splineRef.current.emitEvent('mouseDown', 'sBtn6');
  };

  return (
    <div>
      <Spline
      style={{width: '50vw', height: '50vh', position:'absolute', top:'0px', left:'0px', zIndex:'0'}}
        scene="https://prod.spline.design/18x2kkA3jRxG0Fc7/scene.splinecode"
        onLoad={handleLoad}
      />
    </div>
  );
}
