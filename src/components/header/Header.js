import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';

// import IconIon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import More from '../more/More';
import todayDate from '../../services/todayDate';
import styles from './styles';
import { colors, diagram } from '../../styles/baseStyle';

const Header = ({ navigation }) => {
   // const { weekDay, day, month } = todayDate;
   // eslint-disable-next-line global-require
   const menu = require('../../assets/menu.png');
   return (
      <View style={[styles.horizontalContainer, styles.header]}>
         <View style={[styles.horizontalContainer, styles.left]}>
            <TouchableOpacity
               style={styles.menuButton}
               onPress={() => navigation.toggleDrawer()}>
               <Image
                  style={{
                     marginTop: 0,
                     marginLeft: -9,
                     marginRight: 16,
                     transform: [{ scale: 0.6 }],
                     // scale: 1,
                     // backgroundColor: 'red',
                  }}
                  source={menu}
               />
            </TouchableOpacity>
            <Text style={[styles.title, styles.headerTitle]}>
               {todayDate.weekDay}
               <Text style={{ color: colors.dim }}>
                  {','} {todayDate.day} {todayDate.month}
               </Text>
            </Text>
         </View>
         <View
            style={[
               styles.horizontalContainer,
               styles.mid,
               // { display: 'none' },
            ]}
         />
         <View
            style={[
               styles.horizontalContainer,
               styles.right,
               // { display: 'none' },
            ]}>
            <Icon
               style={{ display: 'flex', marginRight: 23 }}
               name="basket-outline"
               size={diagram.iconSize + 3}
               color={colors.dim}
            />
            <Icon
               style={{ display: 'flex', marginRight: 20 }}
               name="timer-outline"
               size={diagram.iconSize + 2}
               color={colors.dim}
            />

            <More />
         </View>
      </View>
   );
};

export default Header;
// <More />
/*
<Text style={[styles.title, styles.headerTitle]}>Tarefas</Text>
 <Text style={[styles.title, styles.headerTitle]}>
               {todayDate.weekDay}

               <Text style={{ color: colors.dim }}>
                  {' | '} {todayDate.day} {todayDate.month}
               </Text>
            </Text>

Tarefas {''} {'-'} {''}{' '}
 <View style={[styles.horizontalContainer, styles.left]}>
            <TouchableOpacity
               style={styles.menuButton}
               onPress={() => navigation.toggleDrawer()}>
               <AntIcon
                  style={{ marginRight: diagram.margin - 30 }}
                  name="menufold"
                  size={diagram.iconSize - 20}
                  color={colors.dim}
               />
            </TouchableOpacity>
            <Text
               onPress={googleLogout}
               style={[styles.sectionTitle, styles.headerTitle]}>
               {weekDay}, {day} {month}
            </Text>
         </View>

         <View style={[styles.horizontalContainer, styles.right]}>
            <Icon
               // style={{ display: 'none' }}
               name="location-outline"
               size={diagram.iconSize - 20}
               color={colors.dim}
            />
         </View>
         <Icon
               style={{ marginLeft: 23, marginRight: 23, display: 'flex' }}
               name="timer-outline"
               size={diagram.iconSize + 1}
               color={colors.dim}
            />
      </View>

*/
