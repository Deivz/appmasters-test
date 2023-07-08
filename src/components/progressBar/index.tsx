import { useEffect, useState } from 'react';
import { ProgressBarContainer } from './ProgressBar.styles';

export default function ProgressBar() {

  const [filled, setFilled] = useState<number>(0);
  const [isLoading] = useState<boolean>(true);

  useEffect(() => {
    if (filled < 100 && isLoading) {
      setTimeout(() => setFilled((prev: number) => prev += 2), 30);
    }
  }, [filled, isLoading])

  return (
    <section>
      <ProgressBarContainer filled={filled}>
        <h3>Loading...</h3>
        <div className='pixelCornersWrapper'>
          <div className='progressBar'>
            <div className='loadingBar'></div>
            <span className='progressPercent'>{filled > 100 ? 100 : filled}%</span>
          </div>
        </div>
      </ProgressBarContainer>
    </section>
  )
}
