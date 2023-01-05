import React, { useEffect } from 'react';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import PrimeReact from 'primereact/api';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { SpeedDial } from 'primereact/speeddial';
import power from './power.wav';
import click1 from './click2.wav';
import click2 from './click4.wav';
import slider1 from './rollover1.wav';
import slider2 from './rollover2.wav';
import selector1 from './selector1.wav';
import selector2 from './selector2.wav';
import switch1 from './switch8.wav';
import switch2 from './switch9.wav';
import switch3 from './switch31.wav';


export const SpeedDialOne = () => {

  const items = [
      {
          label: 'Add',
          icon: 'pi pi-pencil',
          command: () => {
              Toast.current.show({ severity: 'info', summary: 'Add', detail: 'Data Added' });
          }
      },
      {
          label: 'Update',
          icon: 'pi pi-refresh',
          command: () => {
              Toast.current.show({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
          }
      },
      {
          label: 'Delete',
          icon: 'pi pi-trash',
          command: () => {
              Toast.current.show({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
          }
      }
  ];

  return (
    <div>
      <SpeedDial model={items} />
    </div>
  );
      
}

PrimeReact.ripple = true;



function App() {
  
  useEffect(() => {
    bindSounds();
  })

  const bindSounds = () => {
    let allButtons = document.querySelectorAll(".button");
    let buttonArray = Array.prototype.slice.call(allButtons)
    for (let i=0; i<buttonArray.length; i++) {
      buttonArray[i].addEventListener(('click'), ()=>{
        let str = buttonArray[i].id + 'audio';
        testPlaySound(str)
      })
    }
  }

  const testPlaySound = (id) => {
    const audio = document.getElementById(id);
    audio !== null && audio.play();
  }


  const buttonBank = [
    {
      class: 'p-button-rounded p-button-help',
      icon: 'pi pi-heart',
      label: '',
      value: 'button4',
      sound: switch1,
      preload: 'auto'
    },
    {
      class: 'p-button-rounded p-button-danger',
      icon: 'pi pi-check',
      label: '',
      value: 'button4',
      sound: switch2,
      preload: 'auto'
    },
    {
      class: "p-button-rounded p-button-primary p-button-icon-only",
      icon: 'pi pi-lock-open',
      label: '',
      value: 'button5',
      sound: switch3,
      preload: 'auto'
    },
    {
      class: "p-button-rounded p-button-secondary p-button-icon-only",
      icon: 'pi pi-language',
      label: '',
      value: 'button6',
      sound: click2,
      preload: 'auto'
    },
    {
      class: "p-button-rounded p-button-success p-button-icon-only",
      icon: 'pi pi-globe',
      label: '',
      value: 'button7',
      sound: slider1,
      preload: 'auto'
    },
    {
      class: "p-button-rounded p-button-info p-button-icon-only",
      icon: 'pi pi-info-circle',
      label: '',
      value: 'button8',
      sound: slider2,
      preload: 'auto'
    },
    {
      class: "p-button-rounded p-button-warning p-button-icon-only",
      icon: 'pi pi-money-bill',
      label: '',
      value: 'button8',
      sound: selector1,
      preload: 'auto'
    },
    {
      class: 'p-button-rounded p-button-help',
      icon: 'pi pi-heart',
      label: '',
      value: 'button4',
      sound: selector2,
      preload: 'auto'
    }
  ]

  const buttons = buttonBank.map(e=>{
    return(
    <div className="button" id={e.value}>
      <Button icon={e.icon} label={e.label} className={e.class} />
      <audio id={e.value+"audio"} src={e.sound} preload="auto"></audio>
    </div>
    )
  })

  return (
    

    <div className="App">
      <h1>enjoy interacting with these elements...</h1>
      
      <div className="button" id="button1" ><Button label='click me!'/></div>
      <audio src={selector2} id="button1audio" preload="auto"></audio>

      <div className="button" id="button2"><Button icon='pi pi-check' className="p-button-rounded" value={click1} /></div>
      <audio src={click1} id="button2audio" preload="auto" ></audio>

      <div id="button3" className="button"><Button icon='pi pi-cog' className="p-button-rounded p-button-text p-button-icon-only" value={power} /></div>
      <audio id="button3audio" src={power} preload="auto" ></audio>
      
      <div><SpeedDialOne /></div>
      
      <div className="buttonBucket">{buttons}</div>
    
    </div>
  );
}




export default App;
