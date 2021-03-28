import { FC } from "react";
import CharacterList, { Character } from "./CharacterList";

const Chars: FC = () => {
  const characters: Character[] = [
    {
      id: 0,
      name: "ARIA",
      grade: "president",
    },
    {
      id: 1,
      name: "Alicia",
      grade: "prima",
    },
    {
      id: 2,
      name: "Akari",
      grade: "pair",
    },
  ]

  return (
    <div className="container">
      <header>
        <h1>ARIA Character</h1>
      </header>
      <CharacterList companey="ARIA" characters={characters}/>
    </div>
  )
}

export default Chars;
