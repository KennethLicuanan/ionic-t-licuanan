import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent
} from '@ionic/react';
import './TodoList.css';
import { addCircleOutline, checkmarkCircleOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = updatedTodos[index] + ' - Completed';
    setTodos(updatedTodos);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle class='home'>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="12" size-md="8" offset-md="2">
              <IonCard>
                <IonCardContent>
                  <IonList>
                    {todos.map((todo, index) => (
                      <IonItem key={index} lines="none">
                        <IonCheckbox slot="start" onIonChange={() => handleToggleTodo(index)} />
                        <IonLabel>{todo}</IonLabel>
                        <IonIcon icon={checkmarkCircleOutline} slot="end" color="success" />
                      </IonItem>
                    ))}
                  </IonList>
                  <IonItem lines="none">
                    <IonInput
                      value={newTodo}
                      placeholder="Enter a new todo"
                      onIonChange={(e) => setNewTodo(e.detail.value!)}
                    />
                    <IonButton slot="end" onClick={handleAddTodo} fill="clear">
                      <IonIcon icon={addCircleOutline} slot="icon-only" />
                    </IonButton>
                  </IonItem>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <br />
        <br />
        <br />
        <IonButton href='/Home'>Back To Home</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
