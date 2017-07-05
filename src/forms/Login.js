import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

import {Form, Container, Button, Item, Input} from 'native-base';
import {Text} from 'react-native';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }

    return errors
};

class LoginForm extends Component {
    renderInput = ({ input, label, type, meta: { touched, error, warning } }) => {
        let hasError= false;
        if(error !== undefined){
            hasError= true;
        }
        console.log(hasError);
        return( <Item style= {{ margin: 10 }} error= {hasError}>
            <Input {...input}/>
            {hasError ? <Text>{error}</Text> : <Text />}
        </Item> )
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <Form form={'test'} {...handleSubmit}>
                <Field name="name" component={this.renderInput} />
                <Field name="email" component={this.renderInput} />
            </Form>
        );
    }
}

LoginForm = reduxForm({
    form: 'test',
    validate
})(LoginForm);

export default LoginForm;