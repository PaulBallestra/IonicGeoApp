<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab-communes" href="/home/communes">
          <ion-label> Communes </ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="tab-departements" href="/home/departements">
          <ion-label> Départements </ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="tab-regions" href="/home/regions">
          <ion-label> Régions </ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>

import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonPage } from '@ionic/vue';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonPage },
}
</script>