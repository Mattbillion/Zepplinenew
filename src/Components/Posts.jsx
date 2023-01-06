import "../Styles/Post.css";

export default function Posts(props) {
  return (
    <div className="Post-card">
      <div className="top">
        <img src={props.image} alt="post-image" />
      </div>
      <div className="bottom">
        <div className="published-date">NOV 23 2020</div>
        <div className="title">{props.title}</div>
        <div className="description">
          A quick guide to assisting users in the challenging steps from
          learning about your podcast on the web. A quick guide to assisting
          users in the challenging steps from learning about your podcast on the
          web.
        </div>
        <div className="read-btn">
          <a href="#">READ MORE</a>
        </div>
      </div>
    </div>
  );
}
