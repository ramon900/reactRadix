import React from 'react';
import {StyleSheet, View, FlatList, Text, TextInput, TouchableHighlight, TouchableOpacity} from 'react-native';



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

_pressButon = (item) => {
    alert("Botao de Indice: " + item.indice);
}
_pressFab = () => {
    alert("implemente a função do FAB!");
}

    _renderItem = ( {item} ) => {
        return (
            <TouchableHighlight onPress={() => this._pressButon(item)} >
            <View>
                <Text key={item.indice} style={style.taskItem}> 
                   {item.title} 
                </Text>
            </View>
            </TouchableHighlight>
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

   

    render(){
        return(
            <View style= {style.container}>

                <TextInput 
                    placeholder = "Digite o filtro"
                    onChangeText = {(text) => this.onChangeFilter(text)}
                    style={{borderBottomWidth: 3, padding: 10, borderBottomColor: "#03A9F4", fontSize: 20}}
                />

                <FlatList
                    data={this.state.tasks}
                    renderItem={this._renderItem}
                />

            <TouchableOpacity onPress={() => this._pressFab()} style={style.fab}>
                <Text style={style.fabIcon}>+</Text>
            </TouchableOpacity>
            </View>

            

            );
        }
    }
    
    const style = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center'
        },  
        taskItem: {
            fontSize: 22,
            color: 'black',
            padding: 5,
            marginBottom: 10,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
        },
        fab: { 
            position: 'absolute', 
            width: 56, 
            height: 56, 
            alignItems: 'center', 
            justifyContent: 'center', 
            right: 20, 
            bottom: 20, 
            backgroundColor: '#03A9F4', 
            borderRadius: 30, 
            elevation: 8
            }, 
        fabIcon: { 
              fontSize: 40, 
              color: 'white' 
        }
    });
    
    export default ListaScreen


