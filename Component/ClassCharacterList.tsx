import { Component } from "react";
import { Header, Icon, Item } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export type ClassCharacter = {
  id: number;
  name: string;
  grade: string;
};

type ClassProps = {
  company: string;
  characters: ClassCharacter[];
};

class ClassCharacterList extends Component<ClassProps> {
  render(): ReactElement {
    const { company, characters } = this.props;

    return (
      <>
        <Header as="h2">{company}</Header>
        <Item.Group>
        {characters.map((character) => (
          <Item key={character.id}>
            <Icon name="user circle" size="huge" />
            <Item.Header>{character.name}</Item.Header>
            <Item.Meta>{character.grade}</Item.Meta>
          <Item.Content>
            </Item.Content>
            </Item>
        ))}
        </Item.Group>
        </>
    )
  }
}

export default ClassCharacterList;
