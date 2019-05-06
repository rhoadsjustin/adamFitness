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
import workout1 from '../assets/workout1.png';
import workout2 from '../assets/workout2.png';
import workout3 from '../assets/workout3.png';
import workout4 from '../assets/workout4.png';

 export default class Home extends Component {
   render() {
     return (
 <Container>
        <Header hasTabs>
          <Text>Up And Adam</Text>
        </Header>
        <Tabs>
          <Tab heading="Workouts">
            <Content>
              <WorkoutCard image={workout1} />
              <WorkoutCard image={workout2} />
              <WorkoutCard image={workout3} />
            </Content>
          </Tab>
          <Tab heading="Results">
              <View>
                <Text>Workouts</Text>
              </View>
          </Tab>
          <Tab heading="Nutrition">
              <Content>
                <WorkoutCard image={workout4} />
              </Content>
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