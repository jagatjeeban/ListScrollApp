
import React, { useState } from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): JSX.Element {
  
  const [Items, setItems] = useState([
    {value: 'Item1'},
    {value: 'Item2'},
    {value: 'Item3'},
    {value: 'Item4'},
    {value: 'Item5'},
    {value: 'Item6'},
    {value: 'Item7'},
    {value: 'Item8'},
    {value: 'Item9'},
    {value: 'Item10'},
  ])

  //nested array
  const [Data, setData] = useState(
    [
      {
        title: 'Title 1', 
        data: ['Item 1-1', 'Item 2-1', 'Item 3-1']
      }
    ]
  )

const [refreshing, setRefreshing] = useState(false)

const onRefresh = () => {
setRefreshing(true)
// setItems([...Items, {value: '11'}])
const adding_index = Data.length + 1
setData([...Data,
    {title: 'Title ' + adding_index,
    data: ['Item 1' +'-'+ adding_index,
           'Item 2' +'-'+ adding_index,
           'Item 3' +'-'+ adding_index]}]
)
setRefreshing(false)
}

  return (
    <SectionList
    style={styles.body}
    keyExtractor = {(index) => index.toString()}
    sections={Data}
    renderItem={({ item }) => (
        <View>
            <Text style={styles.text}>{item}</Text>
          </View>
      )}
      renderSectionHeader={(item) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.section.title}</Text>
          </View>
      )}
      refreshControl={
            <RefreshControl 
            refreshing={refreshing} onRefresh={onRefresh}/>
          }
    />
    // <FlatList 
    // keyExtractor = {(index) => index.toString()}
    // data={Items}
    // renderItem={({ item }) => (
    //   <View style={styles.item}>
    //       <Text style={styles.text}>
    //         {item.value}
    //       </Text>
    //     </View>
    // )}
    // refreshControl={
    //     <RefreshControl 
    //     refreshing={refreshing} onRefresh={onRefresh}/>
    //   }
    // />

      // <ScrollView 
      // style={styles.body}
      // refreshControl={
      //   <RefreshControl 
      //   refreshing={refreshing} onRefresh={onRefresh}/>
      // }>
      // {
      //   Items.map((object) => {
      //     return(
      //     <View style={styles.item} key={object.key}>
      //     <Text style={styles.text}>
      //       {object.value}
      //     </Text>
      //   </View>
      //     )
      //   })
      // }
      // </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
