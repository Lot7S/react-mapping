import Avatar from "./Avatar";

export default function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar pic={props.image} />
      </div>
      <div className="bottom">
        <p className="info">{props.num}</p>
        <p className="info">{props.mail}</p>
      </div>
    </div>
  );
}
