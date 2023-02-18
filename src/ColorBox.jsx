export function ColorBox({ color }) {
  const styles = {
    background: color,
    height: "25px",
    width: "250px",
    marginTop: "10px"
  };
  return (
    <div style={styles}></div>
  );
}
