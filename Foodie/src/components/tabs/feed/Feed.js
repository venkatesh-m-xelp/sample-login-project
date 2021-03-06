import React from 'react';
import {View} from 'react-native';
import {Button,Text} from 'native-base';
import {CustomHeader} from '../../CustomHeader';

export class Feed extends React.Component{
  render(){
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Feed" isHome={true} navigation={this.props.navigation}/>
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
      <Button light
        onPress={()=> this.props.navigation.navigate('FeedDetails')}
        title="Go to Details"
      >
        <Text>Go to feed details!</Text>
        </Button>
      </View>
    </View>
  );
  }
}