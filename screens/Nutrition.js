import React from 'react';
import { Content } from 'native-base';
import workout4 from '../assets/workout4.png';
import WorkoutCard from '../components/WorkoutCard';

export const NutritionScreen = () => 
            <Content contentContainerStyle={{ paddingTop: 30 }}>
                <WorkoutCard image={workout4} />
              </Content>;

export default NutritionScreen;