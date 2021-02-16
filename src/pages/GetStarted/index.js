import React from 'react';
import { View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native';

export var width = Dimensions.get('window').width;
const getStarted = require('../../../assets/image1.png');

export default function GetStarted() {
 return (
   <View style={styles.container}>
       <View style={styles.image}>
           <Image source={getStarted} width={198} height={218} />
       </View>
       <View style={styles.description}>
           <Text style={styles.title}>Welcome Survivor</Text>
           <Text style={styles.subTitle}>"Life is not bad. Where there is life, there is hope, heroism, benevolence and love. Where there is life, there is life."</Text>
       </View>
       <View style={styles.bottom}>
           <TouchableOpacity style={styles.btn}>
               <Text style={styles.btnText}>Get Started</Text>
           </TouchableOpacity>
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 25,
      paddingRight: 25,
    },
    description:{
        alignItems: 'center',
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitle:{
        fontSize: 17,
        marginTop: 25,
        textAlign: 'center',
    },
    bottom:{
        position: 'absolute',
        bottom: 30,
    },
    btn:{
        width: width-50,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#3646DB',
    },
    btnText:{
       fontWeight: 'bold',
       fontSize: 18,
       textAlign: 'center',
       color: '#3646DB',
    },
  });
  