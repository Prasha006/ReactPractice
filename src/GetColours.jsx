import { useState } from 'react';

function GetColours() {
  const [color, setColor] = useState("orange");
  const styles = {
    backgroundColor: color,
  };

  return <div>
    <input style={styles} onChange={(event) => setColor(event.target.value)} value={color} />

  </div>;
}
