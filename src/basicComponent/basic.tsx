import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

const Basic = () => {
  return (
    <View>
      <View style={styles.boxContainer}>
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
      </View>
      <Text style={styles.parentText}>
        Text Component can be <Text style={styles.nestedText}>Nested</Text>
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww',
        }}
      />
      <Image style={styles.image} source={require('../asserts/img.jpg')} />
      <Button title="click me!!!" color={'blue'}/>
    </View>
  );
};
const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:90
  },
  redBox: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  blueBox: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
  },
  greenBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
  },
  parentText: {
    fontSize: 16,
    color: 'blue',
  },
  nestedText: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'heavy',
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
export default Basic;
