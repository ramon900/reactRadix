import React from 'react';
import {StyleSheet, View, FlatList, Text, TextInput, TouchableHighlight, Button} from 'react-native';


class ListaScreen extends React.Component{

    constructor(props){
        super(props);
    
        this.initialTasks = [];
    
    this.state = {
            tasks: [],
            loading: false
        };
    }

    componentWillMount(item){
        let tasks =[];
        for (var i = 0; i < 5; i++){
            item = {
                title: "Tarefa: " + i,
                indice: i
            };
            tasks.push(item);
        }
        this.setState({ tasks: tasks});
        this.initialTasks = tasks;
}

    _renderItem = ( {item} ) => {
        return (
            <View>
                <Text key={item.indice} style={style.taskItem}> 
                    {item.indice} {item.title} 
                </Text>
            </View>
        );
    };

    onChangeFilter = (textInputted) => {
        let text = textInputted.toLowerCase();
        let tasks = this.state.tasks;
    
        let filteredTasks = tasks.filter((item) => {
        return item.title.toLowerCase().match(text);
    });
    
        if(!text || text === ''){
            this.setState({
                tasks: this.initialTasks
            });
        } else if(Array.isArray(filteredTasks)){
            this.setState({
                tasks: filteredTasks
            });
        } else if(!Array.isArray(filteredTasks)){
            this.setState({
                tasks: []
            });
        }
    };

    _pressButon = () => {
        alert("Botao pressionado");
    }

    render(){
        return(
            <View style={style.taskItem}>

                <TextInput 
                    placeholder = "Digite o filtro"
                    onChangeText = {(text) => this.onChangeFilter(text)}
                />

                <FlatList
                    data={this.state.tasks}
                    renderItem={this._renderItem}
                />

                <Button title = "Abrir" onPress={this._pressButon} />

            </View>

            );
        }
    }

    

    
    const style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5FCFF',
            justifyContent: 'center'
        },  
        taskItem: {
            fontSize: 18,
            color: '#F0F'
        }
    });
    
    export default ListaScreen


