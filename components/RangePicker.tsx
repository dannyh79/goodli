import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { ViewProps } from 'react-native';

const ONE_TO_ONE_HUNDRED = [...Array(100).keys()] as const;

export type RangePickerProps = {
  onValueChange: (v: number) => void;
  range?: readonly number[];
  value?: number;
} & Pick<ViewProps, 'testID'>;

export const RangePicker = (props: RangePickerProps) => {
  const {
    onValueChange = () => {},
    range = ONE_TO_ONE_HUNDRED,
    testID,
    value = ONE_TO_ONE_HUNDRED[0],
  } = props;

  return (
    <Picker
      testID={testID}
      selectedValue={value}
      onValueChange={onValueChange}
    >
      {range.map((v) => (
        <Picker.Item
          testID={`range-picker-item-${v}`}
          key={v}
          label={String(v)}
          value={v}
        />
      ))}
    </Picker>
  );
};

export default RangePicker;
