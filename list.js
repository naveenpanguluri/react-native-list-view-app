
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity,} from 'react-native';

type Props = {};
export default class ListPage extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={this._onPressBackButton}>
             <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>

          <Text style={styles.headText}>List Page</Text>
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
                <TouchableOpacity onPress={this._onPressButton}>
                   <Text style={styles.item}>{item.key}</Text>
                </TouchableOpacity>
              }
            />
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0095ff',
    padding: 15,
  },
  headText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 120,
  },
  backText: {
    fontSize: 16,
    color: '#fff',
  },
  item: {
    fontSize: 16,
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  }
});
