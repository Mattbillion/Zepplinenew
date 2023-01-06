const strings = ["Home", "Shop", "About Me", "Data1", "Data2"];
export default function Map() {
  const listItems = strings.map((string, index) => (
    <li key={index}>{string}</li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
