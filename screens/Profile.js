import React from 'react';
import { Content, Card, CardItem, Left, Thumbnail, Text, Body } from 'native-base';

export const ProfileScreen = () => 
                <Content>
                        <Card style={{ flex: 0, marginTop: 50 }}>
                            <CardItem style={{flexDirection: 'column'}}>
                                    <Text style={{ fontSize: 20, marginTop: 20, alignSelf: 'center'}}>Up and Adam Profile</Text>
                                <Left style={{flexDirection: 'row'}}>
                                    <Thumbnail style={{ width: 100, height: 100}}/>
                                    <Body style={{ flexDirection: 'column'}}>
                                        <Text style={{ fontSize: 16}}>Username: </Text>
                                        <Text style={{ fontSize: 16 }}>Name: </Text>

                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Body style={{ alignItems: 'center'}}>
                                    {/* <Thumbnail source={images[favTeam]} style={{ height: 200, width: 200, flex: 1 }} /> */}
                                    <Text>
                                    Your Favorite Workout:
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                {/* things to add here later: arguments, favorite players, favorite teams upcoming games */}
                            </CardItem>
                        </Card>
                </Content>;