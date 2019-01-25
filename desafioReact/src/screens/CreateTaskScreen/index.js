import React from 'react';
import {StyleSheet, View, Button, Text, TextInput} from 'react-native';
import {Storage} from '../../storage';

class CreateTaskScreen extends React.Component{
    constructor(props) {
        super(props);

      }
    render(){
        return(
            <View style={style.container}> 
                <Text style={style.titulo}> Titulo </Text>
                <TextInput style={style.tituloInput} 
                           placeholder = "Digite o titulo"
                           maxLength = {20}
                           />
                <Text style={style.descricao}> Descrição </Text>
                <TextInput style={style.descricaoInput}
                           placeholder = "Digite a descrição"
                           maxLength = {50}
                           multiline = {true}                           
                           /> 
                <View style={style.button}>
                    <Button title="Adicionar" color = "black" onPress={ () => this._onPressAdicionar}/>
                </View>                   
            </View>
            );
    }
}

_onPressAdicionar = () => {
     
}
    
    const style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5FCFF',       
            flexDirection: 'column',
            justifyContent: 'center'           
        },
        titulo: {  
            fontSize: 20,
            color: 'black',               
            marginBottom: 10,
            marginStart: 120
        },
        tituloInput: {
            backgroundColor: '#EEEEEE',
            marginStart: 120,
            marginEnd: 120,
            marginBottom: 20
        },
        descricao: {
            fontSize: 20,
            color: 'black',             
            marginBottom: 10,
            marginStart: 120
        },
        descricaoInput: {
            backgroundColor: '#EEEEEE',            
            height: 100,            
            marginStart: 120,
            marginEnd: 120,
            marginBottom: 50
        },
        button: {                 
            marginStart: 120,
            marginEnd: 120
        }
    });
    
    export default CreateTaskScreen