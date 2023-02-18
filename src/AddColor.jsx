import { useState } from 'react';
import { ColorBox } from './ColorBox';

function AddColor() {
  const [color, setColor] = useState("orange");
  const styles = {
    backgroundColor: color,
  };

  const [colorList, setColorList] = useState(["orange", "crimson", "pink"]);

  return (
    <div>
      <input style={styles} onChange={(event) => setColor(event.target.value)} value={color} />
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((clr) => (<ColorBox color={clr} />))}

    </div>
  );
}
