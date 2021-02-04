<template>

    <ion-card v-for="commune in communes" :key="commune['code']">
        <ion-card-header class="ion-text-center">
            <ion-card-title> <strong> {{ commune['nom'] }} </strong> </ion-card-title>
            <ion-card-subtitle class="ion-no-margin"> {{ commune['code'] }} </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>

            <ion-list>
                <ion-item>
                    <ion-label> Département </ion-label>
                    <ion-note slot="end" color="primary"> {{ commune['code'] }} </ion-note>
                    <hr>
                </ion-item>
                <ion-item>
                    <ion-label> Régions </ion-label>
                    <ion-note slot="end" color="primary"> {{ commune['codeRegion'] }} </ion-note>
                </ion-item>
                <ion-item>
                    <ion-label> Population </ion-label>
                    <ion-note slot="end" color="primary"> {{ commune['population'] }} </ion-note>
                </ion-item>
                <ion-item>
                    <ion-label> Code postaux </ion-label>
                    <ion-list>
                        <ion-note v-for="codePostal in commune['codesPostaux']" :key="codePostal" slot="end" color="primary">
                            {{ codePostal.toString() }}
                        </ion-note>
                    </ion-list>

                </ion-item>
            </ion-list>

        </ion-card-content>
    </ion-card>

</template>

<script>

    import { defineComponent } from 'vue';
    import { IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonCardHeader, IonItem, IonLabel, IonNote } from '@ionic/vue';

    export default defineComponent({

        name: 'Commune',
        data(){
            return{
                communes: null,
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
            this.bus.on("displayCommunes", communes => {

                this.communes = communes;

            });
        }
    });

</script>