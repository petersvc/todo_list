/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';

import {Text} from 'react-native';

import 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Todo from './scenes/Todo/Todo';
import Skills from './scenes/Skills/Skills';
import Settings from './scenes/Settings/Settings';
import DrawerContent from './components/DrawerContent/DrawerContent';

const Drawer = createDrawerNavigator();

const d = new Date();

const months = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
];

const today = `${months[d.getMonth()]} ${
  d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
} ${d.getFullYear()}`;

function App() {
  const todosCollection = firestore().collection('todos');
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const usrLists = ['overdue', 'today', 'tomorrow'];

  useEffect(() => {
    return todosCollection.onSnapshot((snap) => {
      const copy = [];
      snap.forEach((doc) => {
        copy.push({...doc.data(), id: doc.id});
      });
      setTodos(copy);
      if (loading) {
        setLoading(false);
      }
    });
  }, []);

  const lists = usrLists.map((list) => {
    const temp = {id: list, todos: []};
    const [month, day, year] = today.split(' ');
    // day < 10 ? (day = 0 + day) : day;
    if (temp.id === 'today') {
      temp.todos = todos.filter((todo) => todo.date === today);
    } else if (temp.id === 'overdue') {
      temp.todos = todos.filter((todo) => {
        const [month2, day2, year2] = todo.date.split(' ');
        return month2 === month && year2 === year && day2 < day ? todo : null;
      });
    } else if (temp.id === 'tomorrow') {
      temp.todos = todos.filter((todo) => {
        const [month2, day2, year2] = todo.date.split(' ');
        return month2 === month &&
          year2 === year &&
          Number(day2) === Number(day) + 1
          ? todo
          : null;
      });
    }
    return temp;
  });
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator
          // drawerType="back"
          drawerStyle={{
            // backgroundColor: '#c6cbef',
            width: '70%',
          }}
          initialRouteName="Todo"
          drawerContent={(props) => (
            <DrawerContent navigation={props.navigation} lists={lists} />
          )}>
          <Drawer.Screen name="Todo">
            {(props) => (
              <Todo
                // todos={todos}
                lists={lists}
                todosCollection={todosCollection}
                navigation={props.navigation}
              />
            )}
          </Drawer.Screen>
          <Drawer.Screen name="Skills">
            {(props) => (
              <Skills todos={todos} todosCollection={todosCollection} />
            )}
          </Drawer.Screen>
          <Drawer.Screen name="Settings">
            {(props) => (
              <Settings todos={todos} todosCollection={todosCollection} />
            )}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

/*
  <Text style={{color: colors.white, marginLeft: 8}}>
    {route.name}
  </Text>
*/
