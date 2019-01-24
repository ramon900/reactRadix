import React from 'react';
import {StyleSheet, View, FlatList, Text, TextInput} from 'react-native';

class ListaScreen extends React.Component{

    constructor(props){
        super(props);
    
        this.initialTasks = [];
    
    this.state = {
            initialTasks: [],
            loading: false
        };
    }

    render(){
        return(
            <View style={style.container}>
            <TextInput 
                placeholder = "Digite o filtro"
            />
            </View>
            );
        }
    }
    
    const style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5FCFF',
            justifyContent: 'center'
        }
    });
    
    export default ListaScreen


