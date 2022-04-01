import style from './style';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

interface AddButtonProps {
  onAdd: () => void
}

const AddButton: React.FC<AddButtonProps> = ({
  onAdd
}) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity
        style={style.addButton}
        onPress={onAdd}
      >
        <Text style={style.addButtonText}>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddButton;