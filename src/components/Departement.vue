<template>

    <ion-card v-for="departement in departements" :key="departement['code']">
        <ion-card-header class="ion-text-center">
            <ion-card-title> <strong> {{ departement.nom }} </strong> </ion-card-title>
            <ion-card-subtitle class="ion-no-margin"> {{ departement.code }} </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>

            <ion-list>
                <ion-item>
                    <ion-label> Département </ion-label>
                    <ion-note slot="end" color="primary"> {{ departement.codeDepartement }} </ion-note>
                    <hr>
                </ion-item>
                <ion-item>
                    <ion-label> Régions </ion-label>
                    <ion-note slot="end" color="primary"> {{ departement.codeRegion }} </ion-note>
                </ion-item>
                <ion-item>
                    <ion-label> Population </ion-label>
                    <ion-note slot="end" color="primary"> {{ departement.population }} </ion-note>
                </ion-item>
                <ion-item>
                    <ion-label> Code postaux </ion-label>
                    <ion-list>
                        <ion-note v-for="codePostal in departement.codesPostaux" :key="codePostal" slot="end" color="primary">
                           {{ codePostal.toString() }},
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

        name: 'Departement',
        data(){
            return{
                departements: null,
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
            this.bus.on("displayDepartements", departements => {

                this.departements = departements;

            });
        }
    });

</script>