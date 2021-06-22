import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Picker} from 'react-native';
import GetStarted, { width } from '../GetStarted';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import { ScrollViewComponent } from 'react-native';


export default function Registered() {
 return (
   <View style={styles.container}>
     <ScrollView showsVerticalScrollIndicator={false} >
       <View style={styles.header}>

            <View style={styles.text}>
                <Text style={styles.Text}>Access and meet other survivors</Text>
            </View>

             <View style={styles.headerContent}>

                     <View style={styles.headerContentItemActive}>
                        <TouchableOpacity style={styles.headerContentButton}>
                            <Text style={styles.headerContentButtonText}>Login</Text>
                        </TouchableOpacity>    
                    </View>

                    <View style={styles.headerContentItem}>
                      <TouchableOpacity style={styles.headerContentButton}>
                          <Text style={styles.headerContentButtonTextActive}>Registered</Text>
                      </TouchableOpacity>
                    </View>
             </View>
       </View>

       <View style={styles.main}>
         
          <View style={styles.welcome}>
              <View style={styles.welcomeDescription}>
                  <Text style={styles.welcomeTitle}>Hello Again</Text>
                  <Text style={styles.welcomeLink}>I'm registered</Text>
              </View>
          </View>

              <View style={styles.form}>
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Name</Text>
                  <Input placeholder="Type your name"/>
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Email</Text>
                  <Input placeholder="Type your email"
                    />
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Password</Text>
                  <Input placeholder="Type your password"
                  secureTextEntry={true}/>
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Gender</Text>
                  <Input placeholder=""/>
                </View>

                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Age</Text>
                  <Input placeholder=""/>
                </View>

                <View style={styles.formGroup}>
                  <TouchableOpacity style={styles.btn}>
                     <Text style={styles.btnText}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            


       </View>
       <View style={styles.bottom}></View>
       </ScrollView>
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
      borderBottomColor: '#3646DB',
      alignItems: 'center',
    },
    headerContentItemActive: {
      width: width/2,
      paddingTop: 10,
      paddingBottom: 10,
      borderBottomWidth: 3,
      borderBottomColor: '#CCC',
      alignItems: 'center',
    },
    headerContentButton: {
      width: width/2,
      alignItems: 'center',

    },
    headerContentButtonTextActive: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'black',
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
      width: width,
      flexDirection: 'row',
      alignItems: 'center',
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
    form: {
      marginTop: 20,
    },
    formGroup: {
      marginTop: 15,
    },
    btn: {
      backgroundColor: '#3646DB',
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
      color: '#FFF',
   },
   ScrollView: {
     marginHorizontal: 0,
   }

});