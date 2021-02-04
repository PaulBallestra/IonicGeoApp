<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab-communes" href="/home/communes">
          <ion-icon name="plane-paper-outline"></ion-icon>
          <ion-label> Communes </ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab-departements" href="/home/departements">
          <ion-icon :icon="plane-paper-outline" />
          <ion-label> Départements </ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab-regions" href="/home/regions">
          <ion-icon :icon="airPlaneOutline" />
          <ion-label> Régions </ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>

import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { paperPlaneOutline, airplaneOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      paperPlaneOutline,
      airplaneOutline
    }
  }
}
</script>