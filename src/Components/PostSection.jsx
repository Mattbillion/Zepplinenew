import Posts from "./Posts";
import "../Styles/PostSection.css";
import { data } from "../Utility/Data";

export default function PostSection(props) {
  console.log(data);
  return (
    <div className="Post-map">
      {data.map((d, index) => (
        <div className="map-wrap" key={index}>
          <Posts image={d.image} title={d.title} description={d.description} />
        </div>
      ))}
    </div>
  );
}
