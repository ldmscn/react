import React from 'react' ;
import { Text, StyleSheet, View } from 'react-native' ;

const ComponentsScreen = () => {
  const name = <Text>Stephen</Text>;

  return (
  <View>
    <Text style={styles.textStyle}>Getting started with react native!</Text>
    <Text style={styles.subHeaderStyle}>My name is {name}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
   textStyle: {
       fontSize: 45
   },
   subHeaderStyle: {
     fontSize: 30
   }
});

export default ComponentsScreen;
