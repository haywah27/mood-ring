import React from "react";
import "./User.css";


export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Wolverine, X-Men",
        biography:
          "Founder, X-style Hair salon & Spa. had a hard day fighting invading mutants ? Let our hair designers whisk you away with killer style! Graduate of Metal Nail Salons. Literally.",
      },
      image:
        "https://i.pinimg.com/originals/f2/54/82/f25482a6daf9c8f73967dcbbdfe67910.jpg",
      quote: {
        content: "He who rules the remote, rules the world",
        source: "Garfield the Cat",
      },
    };
  }
  render() {
    return (
      <div className="User">
        <Image src={this.state.image} />
        <Profile person={this.state.person} quote={this.state.quote} />
      </div>
    );
  }
}

function Image(props) {
  return (
    <div
      className="Image"
      style={{ backgroundImage: "url(" + props.src + ")" }}
    ></div>
  );
}
function Profile(props) {
  return (
    <div className="Profile">
      <h1 className="Name">{props.person.name}</h1>
      <p className="Bio">{props.person.biography}</p>
      <div className="Quote">
        <blockquote>&ldquo; {props.quote.content} &rdquo;</blockquote>
        <div className="byline">&mdash; {props.quote.source}</div>
      </div>
    </div>
  );
}

export default User;
