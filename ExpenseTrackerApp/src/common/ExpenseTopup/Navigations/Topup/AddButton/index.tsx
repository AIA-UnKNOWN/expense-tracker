import style from './style';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';

interface AddButtonProps {
  label: string,
  onAdd: () => void
}

const AddButton: React.FC<AddButtonProps> = ({
  label, onAdd
}) => {
  return (
    <View>
      <TouchableOpacity
        style={style.addButton}
        onPress={onAdd}
      >
        <Text style={style.addButtonText}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddButton;