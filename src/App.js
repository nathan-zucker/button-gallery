import React from 'react';
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

  const handleClick = (event) => {
    playSound(event.target.value)
  }

  const playSound = (id) => {
    const e = document.getElementById(id)
    e.currentTime = 0
    e.play()
  }

  const buttonBank = [
    {
      class: 'p-button-rounded p-button-help',
      icon: 'pi pi-heart',
      label: '',
      value: 'button4',
      sound: switch1
    },
    {
      class: 'p-button-rounded p-button-danger',
      icon: 'pi pi-check',
      label: '',
      value: 'button4',
      sound: switch2
    },
    {
      class: "p-button-rounded p-button-primary p-button-icon-only",
      icon: 'pi pi-lock-open',
      label: '',
      value: 'button5',
      sound: switch3
    },
    {
      class: "p-button-rounded p-button-secondary p-button-icon-only",
      icon: 'pi pi-language',
      label: '',
      value: 'button6',
      sound: click2
    },
    {
      class: "p-button-rounded p-button-success p-button-icon-only",
      icon: 'pi pi-globe',
      label: '',
      value: 'button7',
      sound: slider1
    },
    {
      class: "p-button-rounded p-button-info p-button-icon-only",
      icon: 'pi pi-info-circle',
      label: '',
      value: 'button8',
      sound: slider2
    },
    {
      class: "p-button-rounded p-button-warning p-button-icon-only",
      icon: 'pi pi-money-bill',
      label: '',
      value: 'button8',
      sound: selector1
    },
    {
      class: 'p-button-rounded p-button-help',
      icon: 'pi pi-heart',
      label: '',
      value: 'button4',
      sound: selector2
    }
  ]

  const buttons = buttonBank.map(e=>{
    return(
    <div className="button" >
      <Button onClick={handleClick} value={e.value} icon={e.icon} label={e.label} className={e.class} />
      <audio id={e.value} src={e.sound} preload="true" />
    </div>
    )
  })

  return (
    <div className="App">
      <h1>enjoy interacting with these elements...</h1>
      <div className="button"><Button onClick={handleClick} label='click me!' value="buttonOne"/></div>
      <audio id="buttonOne" src={selector2} preload="auto" ></audio>
      <div className="button"><Button onClick={handleClick} icon='pi pi-check' className="p-button-rounded" value="audio2" /></div>
      <audio id="audio2" src={click1}  ></audio>
      <div className="button"><Button onClick={handleClick} icon='pi pi-cog' className="p-button-rounded p-button-text p-button-icon-only" value="audio3" /></div>
      <audio id="audio3" src={power}></audio>
      <div><SpeedDialOne /></div>
      <div className="buttonBucket">
          {buttons}
      </div>
    </div>
  );
}

export default App;
