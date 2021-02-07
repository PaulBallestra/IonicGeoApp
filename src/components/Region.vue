<template>

    <ion-card v-for="region in regions" :key="region.code">
        <ion-card-header class="ion-text-center">
            <ion-card-title> <strong> {{ region.nom }} </strong> </ion-card-title>
            <ion-card-subtitle class="ion-no-margin"> {{ region.code }} </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>

            <ion-list>
                <ion-item>
                    <ion-label> Code Région </ion-label>
                    <ion-note slot="end" color="primary"> {{ region.codeRegion }} </ion-note>
                </ion-item>
            </ion-list>

        </ion-card-content>
    </ion-card>

</template>

<script>

    import { defineComponent } from 'vue';
    import { IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonItem, IonLabel, IonNote } from '@ionic/vue';

    export default defineComponent({

        name: 'Region',
        data(){
            return{
                regions: null,
            }
        },
        components: {
            IonCard,
            IonCardTitle,
            IonCardSubtitle,
            IonCardContent,
            IonCardHeader,
            IonItem,
            IonLabel,
            IonNote
        },
        mounted() {
            this.bus.on("displayRegions", regions => {

                this.regions = regions;
                console.log(regions)

            });
        }
    });

</script>