import React, {useCallback} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';

function TagModal({todo, setTodo, toggleTagModal, bottomMargin}) {
  let radioBtn;
  const tagList = ['livre', 'saúde', 'aprender', 'trabalho'];
  const keyExtractor = useCallback((item) => item);
  const tagRender = useCallback(({item}) => {
    if (todo.tag === item) radioBtn = 'circle-slice-8';
    else radioBtn = 'circle-outline';
    return (
      <TouchableOpacity
        style={styles.tagItem}
        onPress={() => {
          setTodo({...todo, item});
          toggleTagModal();
        }}>
        <Icon
          name={radioBtn}
          size={styles.icon.size + 8}
          color={styles.icon.color}
        />
        <Text
          style={[styles.title, {marginLeft: 30, textTransform: 'capitalize'}]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <View style={[styles.tagModal, {marginBottom: bottomMargin}]}>
      <FlatList
        data={tagList}
        keyExtractor={keyExtractor}
        renderItem={tagRender}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
}

export default TagModal;
