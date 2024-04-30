import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonTextarea,
  IonButton,
  IonList,
  IonItem,
  IonCheckbox,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import './TodoList.css';
import { addCircleOutline, checkmarkCircleOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask(''); // clear the input field
    }
  };

  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTasks[index].startsWith('✓ ') ? updatedTasks[index].substring(2) : '✓ ' + updatedTasks[index];
    setTasks(updatedTasks);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class='home'>Todo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
      <IonContent fullscreen>

        <IonCard color={'warning'}>
          <IonCardHeader>
            <IonTextarea
              value={task}
              onIonChange={(e) => setTask(e.detail.value!)}
              label="Solid textarea"
              labelPlacement="floating"
              fill="outline"
              placeholder="Enter text"
            ></IonTextarea>
          </IonCardHeader>
          <IonCardContent>
            <IonButton expand="block" onClick={addTask}>Add Task</IonButton>
          </IonCardContent>
        </IonCard>


          <IonCard>
          <IonList>
          {tasks.map((task, index) => (
            <IonItem key={index}>
              <IonCheckbox slot="start" checked={task.startsWith('✓ ')} onIonChange={() => toggleTask(index)} />
              <IonTitle className={task.startsWith('✓ ') ? 'completed' : ''}>{task}</IonTitle>
            </IonItem>
          ))}
        </IonList>
          </IonCard>
        

      </IonContent>
    </IonPage>
  );
};

export default Home;
