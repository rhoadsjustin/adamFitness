import React from 'react';
import {
  Text,
  Content,
  Header,
  Item, Button, Input, Icon
} from 'native-base';

export const ResultScreen = () => (
    <Content contentContainerStyle={{ paddingTop: 30 }}>
                   <Header searchBar rounded>
                    <Item>
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                    </Header>
    </Content>
);

export default ResultScreen;