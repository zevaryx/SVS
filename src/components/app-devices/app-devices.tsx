
import { Component, Host, h, State } from '@stencil/core';







@Component({
  tag: 'app-devices',
  styleUrl: 'app-devices.css',
})
export class AppDevices {
  @State()
    devices: Devices[] = [];
  
    async componentDidLoad() {
      const response = await fetch("https://sdapi.zevaryx.com/api/v1/devices/");
      const data = await response.json();
      console.log('data', data);
      this.devices = data;
    }
  render() {
    return (
      <Host>
        
        <ion-header>
          <ion-toolbar color="primary">
          <ion-menu-button slot="start"></ion-menu-button>
            <ion-title>Devices</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>

          {
            !this.devices ?
 <ion-spinner />:
this.devices.map(device => (
              <ion-item>
            <ion-label>{device.long_name}</ion-label>
            {console.log(device.long_name)}
            
          </ion-item>)
            )

}
         
          <ion-fab vertical="bottom" horizontal="end" slot="fixed">
<ion-fab-button>
              <ion-icon name="add"></ion-icon>
            </ion-fab-button>
            </ion-fab>
        </ion-content>
      </Host>
    );
  }
}
