import './App.css';

import React, { useEffect, useState } from 'react';

export default function App(): React.JSX.Element {

  const [clickCount, setClickCount] = useState<number>(0);
  const [text, setText] = useState('');

  const handleClick = (): void => {
    setClickCount(prev => prev + 1);
  };

  /** clickCount 変更時に実行する useEffect 1 */
  useEffect(() => {
    if (clickCount === 0) {
      return;
    }

    const execute = async () => {
      setText(prev => {
        return prev.concat(`Clicked ${clickCount} time(s). useEffect executed A.\n`);
      });
    };

    execute();
  }, [clickCount]);

  /** clickCount 変更時に実行する useEffect 2 */
  useEffect(() => {
    if (clickCount === 0) {
      return;
    }

    const execute = async () => {
      setText(prev => {
        return prev.concat(`Clicked ${clickCount} time(s). useEffect executed B.\n`);
      });
    };

    execute();
  }, [clickCount]);

  return (
    <>
      <div>
        <button onClick={handleClick}>click</button>
      </div>
      <textarea
        placeholder='sample'
        readOnly={true}
        value={text}
      />
    </>
  );

}
