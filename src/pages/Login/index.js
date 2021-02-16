import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import GetStarted, { width } from '../../pages/GetStarted';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';


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

       <View style={styles.main}>
          <View style={styles.welcome}>
              <View style={styles.welcomeDescription}>
                  <Text style={styles.welcomeTitle}>Hello Again</Text>
                  <Text style={styles.welcomeLink}>I'm not registered</Text>
              </View>
          </View>

              <View style={styles.form}>
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Email</Text>
                  <TextInput placeholder="Type your e-mail"
                    leftIcon={<Icon name="envelope" size={18} color="#666666"/>}/>
                </View>
              </View>
          


       </View>
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
      borderBottomColor: '#3646DB',
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
    main: {
      width: width,
      paddingRight: 25,
      paddingLeft: 25,
    },
    welcome: {
      marginTop: 20,
    },
    welcomeDescription: {

    },
    welcomeTitle: {
      fontSize: 18,
      fontWeight: "bold",
    },
    welcomeLink: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#3646DB',
      marginTop: 15,
    },

});