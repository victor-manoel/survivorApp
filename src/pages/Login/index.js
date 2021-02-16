import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import GetStarted, { width } from '../../pages/GetStarted';


export default function Login() {
 return (
   <View style={styles.container}>
       <View style={styles.header}>

            <View style={styles.text}>
                <Text style={styles.Text}>Access and meet other survivors</Text>
            </View>

             <View style={styles.headerContent}>

                     <View style={styles.headerContentItemActive}>
                        <TouchableOpacity style={styles.headerContentButton}>
                            <Text style={styles.headerContentButtonTextActive}>Login</Text>
                        </TouchableOpacity>    
                    </View>

                    <View style={styles.headerContentItem}>
                      <TouchableOpacity style={styles.headerContentButton}>
                          <Text style={styles.headerContentButtonText}>Registered</Text>
                      </TouchableOpacity>
                    </View>
             </View>
       </View>

       <View style={styles.main}></View>
       <View style={styles.bottom}></View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingLeft: 25,
      paddingRight: 25,
      paddingTop: 40,
    },
    text: {
      alignItems: 'center',
    },
    Text: {
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 20,
    },
    headerContent: {
      flexDirection: 'row',
      marginTop: 20,
    },
    headerContentItem: {
      width: width/2,
      paddingTop: 10,
      paddingBottom: 10,
      borderBottomWidth: 3,
      borderBottomColor: '#CCC',
      alignItems: 'center',
    },
    headerContentItemActive: {
      width: width/2,
      paddingTop: 10,
      paddingBottom: 10,
      borderBottomWidth: 3,
      borderBottomColor: '#364608',
      alignItems: 'center',
    },
    headerContentButton: {
      width: width/2,
      alignItems: 'center',

    },
    headerContentButtonTextActive: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    headerContentButtonText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#CCC',
    },
});