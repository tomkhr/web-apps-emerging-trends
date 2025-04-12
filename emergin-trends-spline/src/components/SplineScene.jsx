import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene({ setHideAbout }) {
  const splineRef = useRef(null);

  const handleLoad = (splineApp) => {
    splineRef.current = splineApp;
  };

  const handleClick = (buttonId) => {
    if (!splineRef.current) return;

    splineRef.current.emitEvent('mouseDown', buttonId);

    if (buttonId === 'sBtn6') {
      setHideAbout(false);
    } else if (
      buttonId === 'sBtn1' ||
      buttonId === 'sBtn2' ||
      buttonId === 'sBtn3' ||
      buttonId === 'sBtn4' ||
      buttonId === 'sBtn5'
    ) {
      setHideAbout(true);
    }
  };

  return (
    <div>
      <Spline
        style={{ width: '100vw', height: '100vh', position: 'absolute', top: '0px', left: '0px', zIndex: '0' }}
        scene="https://prod.spline.design/18x2kkA3jRxG0Fc7/scene.splinecode"
        onLoad={handleLoad}
      />

      <div style={{ zIndex: '1', position: 'fixed', left: '15px', bottom: '15px' }}>
        <button onClick={() => handleClick('sBtn6')} className='BtnSpecial'>What is Atomic Design?</button>
        <button onClick={() => handleClick('sBtn1')}>Atoms</button>
        <button onClick={() => handleClick('sBtn2')}>Molecules</button>
        <button onClick={() => handleClick('sBtn3')}>Organisms</button>
        <button onClick={() => handleClick('sBtn4')}>Templates</button>
        <button onClick={() => handleClick('sBtn5')}>Pages</button>
      </div>
    </div>
  );
}
