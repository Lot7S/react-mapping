import "./styles.css";
import Card from "./Card";
import Contact from "./Contact";

export default function App() {
  return (
    <div>
      <h1 className="heading">Contacts</h1>
      {Contact.map((limbo) => {
        return (
          <Card
            name={limbo.name}
            image={limbo.image}
            num={limbo.num}
            mail={limbo.mail}
          />
        );
      })}
    </div>
  );
}
