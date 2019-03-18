/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity,} from 'react-native';

type Props = {};

export default class App extends Component<Props> {

  constructor(props) {
   super(props);
   this.state = {
     page: true
   };
   this._onPressList = this._onPressList.bind(this);
 }

 _onPressList(){
   this.setState({ page: !this.state.page });
 }

  render() {
    if (this.state.page){
    return (<View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headText}>Home Page</Text>
          </View>
          <ScrollView>
            <FlatList
                data={[
                  {key: 'Devin'},
                  {key: 'Jackson'},
                  {key: 'James'},
                  {key: 'Joel'},
                  {key: 'John'},
                  {key: 'Jillian'},
                  {key: 'Jimmy'},
                  {key: 'Julie'},
                  {key: 'Devin'},
                  {key: 'Jackson'},
                  {key: 'James'},
                  {key: 'Joel'},
                  {key: 'John'},
                  {key: 'Jillian'},
                  {key: 'Jimmy'},
                  {key: 'Julie'},
                ]}
                renderItem={({item}) =>
                  <TouchableOpacity onPress={this._onPressList}>
                     <Text style={styles.item}>{item.key}</Text>
                  </TouchableOpacity>
                }
              />
          </ScrollView>
        </View>);
        }
          else{
          return (<View style={styles.container}>
          <View style={styles.listheader}>
            <TouchableOpacity onPress={this._onPressList}>
               <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.listheadText}>List Page</Text>
          </View>
          <ScrollView>
            <FlatList
                data={[
                  {key: 'Devin'},
                  {key: 'Jackson'},
                  {key: 'James'},
                  {key: 'Joel'},
                  {key: 'John'},
                  {key: 'Jillian'},
                  {key: 'Jimmy'},
                  {key: 'Julie'},
                  {key: 'Devin'},
                  {key: 'Jackson'},
                  {key: 'James'},
                  {key: 'Joel'},
                  {key: 'John'},
                  {key: 'Jillian'},
                  {key: 'Jimmy'},
                  {key: 'Julie'},
                ]}
                renderItem={({item}) =>
                     <Text style={styles.item}>{item.key}</Text>
                }
              />
          </ScrollView>
        </View>);
      }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#0095ff',
    paddingVertical: 15,
  },
  headText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  item: {
    fontSize: 16,
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },

  listheader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0095ff',
    padding: 15,
  },
  listheadText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 120,
  },
  backText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },

});
