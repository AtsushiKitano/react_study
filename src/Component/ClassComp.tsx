import { Component, ReactElement } from "react";
import ClassCharacterList, {ClassCharacter} from "./ClassCharacterList";

class ClassChar extends Component {
  characters: ClassCharacter[] = [
    {
      id: 0,
      name: "ヒメ社長",
      grade: "President",
    },
    {
      id: 1,
      name: "晃",
      grade: "Prima",
    },
    {
      id: 2,
      name: "藍華",
      grade: "Pair",
    }
  ];

  render(): ReactElement{
    return(
      <div className="container">
        <header>
          <h1>姫屋</h1>
        </header>
        <ClassCharacterList company="姫屋" characters={this.characters} />
      </div>
    );
  }
}

export default ClassChar;
