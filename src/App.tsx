import './App.css';

import React, { useEffect, useState } from 'react';

export default function App(): React.JSX.Element {

  const [clickCount, setClickCount] = useState<number>(0);
  const [text, setText] = useState('');

  const handleClick = (): void => {
    setClickCount(prev => prev + 1);
  };

  useEffect(() => {
    if (clickCount === 0) {
      return;
    }

    setText(prev => {
      return prev.concat('useEffect executed A.\n');
    });
  }, [clickCount]);

  useEffect(() => {
    if (clickCount === 0) {
      return;
    }

    setText(prev => {
      return prev.concat('useEffect executed B.\n');
    });
  }, [clickCount]);

  return (
    <div>
      <div>
      <button onClick={handleClick}>click</button>
      </div>
      <div>
        <textarea
          placeholder='sample'
          readOnly={true}
          rows={10}
          value={text} />
      </div>
    </div>
  );

}
