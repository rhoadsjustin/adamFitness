import React, {
    Component
  } from 'react';
import {
    Container,
   Tab,
   Tabs,
   View,
   Text,
   Header,
   Content,
   } from 'native-base';
import WorkoutCard from '../components/WorkoutCard';

 export default class Home extends Component {
   render() {
     return (
 <Container>
        <Header hasTabs>
          <Text>Up And Adam</Text>
        </Header>
        <Tabs>
          <Tab heading="Workouts">
            
          </Tab>
          <Tab heading="Results">
              
          </Tab>
          <Tab heading="Nutrition">
             
          </Tab>
          <Tab heading="Community">
              <View>
                <Text>Workouts</Text>
              </View>
          </Tab>
        </Tabs>
      </Container>
     );
   }
 };