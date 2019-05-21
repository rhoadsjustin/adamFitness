import React from 'react';
import { Content } from 'native-base';
import WorkoutCard from '../components/WorkoutCard';
import workout1 from '../assets/workout1.png';
import workout2 from '../assets/workout2.png';
import workout3 from '../assets/workout3.png';

export const WorkoutScreen = () => ( 
<Content contentContainerStyle={{ paddingTop: 30 }}>
        <WorkoutCard image={workout1} />
        <WorkoutCard image={workout2} />
        <WorkoutCard image={workout3} />
</Content> );

export default WorkoutScreen;