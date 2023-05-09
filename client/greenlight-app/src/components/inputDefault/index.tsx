import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Text} from 'react-native';

import * as St from './styles';

// type TValue = string | undefined;

// interface IInputOnChange {
//   (value: TValue): void;
// }

// interface props {
//   label?: string;
//   value?: TValue;
//   onChange: IInputOnChange;
//   onBlur: onBlurTextInput;
// }

export const InputDefault = () => {
  const {
    control,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  return (
    <St.Container>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <St.Input
            placeholder="First name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}
    </St.Container>
  );
};
