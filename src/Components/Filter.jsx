import "../Styles/Filter.css";
export default function Filter() {
  return (
    <div className="Filter-container">
      <ul>
        <li>
          <a className="Active" href="active">
            All
          </a>
        </li>
        <li>
          <a href="#">UI Design</a>
        </li>
        <li>
          <a href="#">UX Design</a>
        </li>
        <li>
          <a href="#">Product Design</a>
        </li>
        <li>
          <a href="#">Articles</a>
        </li>
        <li>
          <a href="#">Tutorials</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
      </ul>
    </div>
  );
}
