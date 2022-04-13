import style from './style';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

interface AddButtonProps {
  label: string,
  onAdd: () => void
}

const AddButton: React.FC<AddButtonProps> = ({
  label, onAdd
}) => {
  return (
    <View style={{ alignItems: "center" }}>
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