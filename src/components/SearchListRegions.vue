<template>

    <ion-list>
        <ion-item>
            <ion-grid>
                <ion-row>
                    <ion-label class="m-auto"> <strong> Régions </strong> </ion-label>
                </ion-row>
                <ion-row>
                    <ion-item>
                        <ion-label> Régions </ion-label>
                        <ion-select placeholder="01 - Guadeloupe" id="selectedRegion" ok-text="OK" cancel-text="Cancel" size="large">
                            <ion-select-option v-for="region in regions" :key="region" :value="region.code"> {{ region.code }} - {{ region.nom }} </ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-row>
                <ion-row class="d-flex flex-row justify-content-between">

                </ion-row>
                <ion-row class="mt-3 mb-2">
                    <ion-button class="m-auto w-100" @click="displayRegions"> Valider </ion-button>
                </ion-row>
            </ion-grid>
        </ion-item>
    </ion-list>

</template>

<script>

    import { defineComponent } from 'vue';
    import { IonList, IonItem, IonGrid, IonRow, IonButton, IonSelect, IonSelectOption, IonLabel } from '@ionic/vue';
    import { axios } from '@/plugins/axios';

    export default defineComponent({

        name: "SearchListRegions",
        data(){
            return{
                regions: null,
            }
        },
        components: {
            IonList,
            IonItem,
            IonGrid,
            IonRow,
            IonButton,
            IonSelect,
            IonSelectOption,
            IonLabel
        },
        methods: {

            displayRegions: function(e)
            {

                e.preventDefault();

                let regionSearch = document.getElementById('selectedRegion').value;

                if(regionSearch !== ""){

                    axios.get('https://geo.api.gouv.fr/regions/' + regionSearch + '/departements').then((response) => {

                        this.bus.emit("displayRegions", response.data);
                        this.bus.emit("displayNumberOfRegions", response.data.length);

                    }).catch((error) => {

                        console.log(error)

                    });
                }else{
                    this.bus.emit("errorRegions", "Aucune région recherchée, erreur !");
                }
            }
        },
        mounted(){

            axios.get(`https://geo.api.gouv.fr/regions`).then((response) => {

                this.regions = response.data

            }).catch((error) => {

                console.log(error)

            });
        }
    });

</script>