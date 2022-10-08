import { useState } from "react";
import { TextInput, TouchableOpacity, Text, View, FlatList, Alert } from "react-native";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";

import { styles } from './styles';

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskLabel, setTaskLabel] = useState('');
  const [isSelected, setSelection] = useState(false);

  function handleTaskAdd() {
    console.log('Task Add')

    if(tasks.includes(taskLabel)) {
      return Alert.alert("Tarefa já cadastrada", "Já existe uma tarefa na lista com essa descrição.");
    }
    setTasks(prevState => [...prevState, taskLabel]);
    setTaskLabel('');
  }

  function handleTaskRemove(label: string) {
    Alert.alert("Remover", `Remover a tarefa ${label}?`, [
      {
        text: 'Sim',
        // prevState: pega o estado anterior, setParticipants seta um novo estado.
        onPress: () => setTasks(prevState => prevState.filter(task => task !== label))
      },
      {
        text: 'Não' ,
        style: 'cancel'
      }
    ]);
  }

  return (
    <View>
      <Header />
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTaskLabel}
          value={taskLabel}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <View>
            <Text style={styles.buttonText}>
              +
            </Text>
          </View>
        </TouchableOpacity>        
      </View>

      <View>
        <Text>
          Criadas {tasks.length}
        </Text>
        <Text>
          Concluídas {tasks.length}
        </Text>
      </View>
      
      <FlatList 
        data={tasks}
        keyExtractor={item => item}
        renderItem={({item}) => (
          // <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
          <Task key={item} label={item} onRemove={() => handleTaskRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Nenhuma tarefa foi adicionada.            
          </Text>
        )}
      />
    </View>
  )
}