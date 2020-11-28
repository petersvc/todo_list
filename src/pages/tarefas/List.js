import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Todo from './Todo';
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';

const List = ({ list }) => {
   const listComplete = list.todos.filter((todo) => todo.complete).length;
   const listTotal = list.todos.length;

   const inicialVisibility = list.id === 'hoje';
   const [listVisibility, setListVisibility] = useState(inicialVisibility);
   const toggleListVisibility = () => setListVisibility(!listVisibility);

   let visibleStyle = {
      backgroundColor: 'transparent', // colors.bg2,
      // marginBottom: 16,
      // marginTop: 12,
   };

   if (!listVisibility) {
      visibleStyle = {
         backgroundColor: 'transparent', // colors.black2,
         marginBottom: 0,
         // marginTop: 12,
      };
   }

   const keyExtractor = useCallback((item) => item.id);

   const renderTodo = useCallback(({ item }) => (
      <Todo todo={item} listId={list.id} />
   ));

   return (
      <View
         style={[
            styles.verticalContainer,
            styles.list,
            listVisibility ? { paddingBottom: 16 } : { paddingBottom: 0 },
         ]}>
         <TouchableOpacity
            style={[
               visibleStyle,
               styles.listHeader,
               styles.horizontalContainer,
               // listVisibility ? { marginLeft: 1 } : { marginLeft: 1 },
            ]}
            onPress={toggleListVisibility}>
            <Text style={[styles.titleSpoted, styles.listName]}>{list.id}</Text>
            <View style={[styles.tasksNumbers]}>
               <Text style={[styles.numbersSm, styles.remaining]}>
                  {list.id === 'concluídas'
                     ? listTotal
                     : listTotal - listComplete}
               </Text>
            </View>
            <Icon
               style={{ marginLeft: 3, marginRight: 2, marginTop: 1 }}
               name={listVisibility ? 'chevron-up' : 'chevron-down'}
               color={colors.dim}
               size={diagram.iconSize - 5}
            />
         </TouchableOpacity>
         {listVisibility ? (
            <FlatList
               data={list.todos}
               keyExtractor={keyExtractor}
               renderItem={renderTodo}
            />
         ) : null}
      </View>
   );
};

export default List;

/* 
<Icon
               style={listVisibility ? { marginLeft: -3 } : { marginLeft: -1 }}
               name={listVisibility ? 'chevron-up' : 'chevron-down'}
               color={colors.dim}
               size={diagram.iconSize}
            />
<View style={[styles.tasksNumbers]}>
  <Text style={[styles.numbersSm, styles.remaining]}>
    {list.id === 'concluída' ? listTotal : listTotal - listComplete}
  </Text>
</View>

*/
