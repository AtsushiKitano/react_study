import React from "react";
import { Header, Icon, Item} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export type Character = {
  id: number;
  name: string;
  grade: string
};

type Props = {
  company: string;
  characters: Character[];
};

const CharacterList: FC<Props> = ({ company, characters }) => (
  <>
    <Header as="h2">{company}</Header>
    <Item.Group>
      {characters.map((character) => (
        <Item key={character.id}>
          <Icon name="user circle" size="huge" />
          <Item.Content>
            <Item.Header>{character.name}</Item.Header>
            <Item.Meta>{character.grade}</Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
);

export default CharacterList;
