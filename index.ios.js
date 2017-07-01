import React from 'react';
import { InputGroup, List, CheckBox, ListItem, Input, Content, Container, Button, Icon } from 'native-base';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

export default class OxHexStore extends React.Component {
    render() {

        return (
            <Container>
                <Image source={require('./assets/loginb.png')}>
                    <View>
                        <Text style={styles.headline}>0xHEX/STORE</Text>
                        <View style={styles.loginHeader}>
                            <Button transparent>
                                <Text style={styles.loginButtonActive}>Login</Text>
                            </Button>
                            <Button transparent>
                                <Text style={styles.loginButtonInactive}>Sign Up</Text>
                            </Button>
                        </View>
                    </View>
                </Image>
                <Content style={{marginTop: 55, padding: 22}}>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Icon name="mail" />
                                <Input placeholder="EMAIL" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="lock" />
                                <Input placeholder="PASSWORD" secureTextEntry={true}/>
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button full style={{marginLeft: 14, marginTop: 90, borderRadius: 5, backgroundColor: '#E10A6A'}}>
                        <Text style={{color: 'white'}}>SIGN IN</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

let styles = StyleSheet.create({
    headline: {
        fontSize: 35,
        marginTop: 80,
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        fontWeight: 'bold',
        color: '#E10A6A'
    },
    loginHeader: {
        marginLeft: 20,
        marginTop: 150,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    loginButtonActive: {
        fontSize: 20,
        color: '#0A3571'
    },
    loginButtonInactive: {
        fontSize: 20,
        color: '#BBBACD'
    }
});

AppRegistry.registerComponent('OxHexStore', () => OxHexStore);
