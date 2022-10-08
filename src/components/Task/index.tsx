import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from './styles';

type Props = {
  label: string;
  onRemove: () => void;
}

export function Task({ label, onRemove }: Props) {  
  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
    <View style={styles.container}>     
      <BouncyCheckbox
        size={25}
        fillColor="#1e6F9F"        
        text={label}        
        innerIconStyle={{ borderWidth: 2 }}        
        onPress={() => setCheckboxState(!checkboxState)}
        style={styles.checkbox}
      />
      <TouchableOpacity style={styles.trashButton} onPress={onRemove}>
        <Text style={styles.trashButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  )
}