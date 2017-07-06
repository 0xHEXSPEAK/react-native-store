import React from 'react';
import {Text} from 'react-native';
import {Item, Icon, Input} from 'native-base';

export default renderBaseInput = ({ input, label, type, meta: { touched, error, warning } }, icon) => {
    let hasError = error !== undefined && touched;
    return(
        <Item error={hasError}>
            <Icon name={icon} />
            <Input {...input}/>
            {hasError ? <Text>{error}</Text> : <Text />}
        </Item>
    )
};