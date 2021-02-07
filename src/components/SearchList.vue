<template>

    <ion-list>
        <ion-item>
            <ion-grid>
                <ion-row>
                    <ion-label class="m-auto"> <strong> Département </strong> </ion-label>
                </ion-row>
                <ion-row>
                    <ion-item>
                        <ion-label> Département </ion-label>
                        <ion-select placeholder="78 - Yvelines" id="selectedDepartement" ok-text="OK" cancel-text="Cancel">
                            <ion-select-option v-for="departement in departements" :key="departement" :value="departement.code"> {{ departement.code }} - {{ departement.nom }} </ion-select-option>
                        </ion-select>
                    </ion-item>
                </ion-row>
                <ion-row class="d-flex flex-row justify-content-between">

                </ion-row>
                <ion-row class="mt-3 mb-2">
                    <ion-button class="m-auto w-100" @click="displayDepartements"> Valider </ion-button>
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

        name: "SearchList",
        data(){
            return{
                departements: null,
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

            displayDepartements: function(e)
            {

                e.preventDefault();

                let departementSearch = document.getElementById('selectedDepartement').value;

                if(departementSearch !== ""){

                    axios.get('https://geo.api.gouv.fr/departements/' + departementSearch + '/communes').then((response) => {

                        this.bus.emit("displayDepartements", response.data);
                        this.bus.emit("displayNumberOfDepartements", response.data.length);

                    }).catch((error) => {

                        console.log(error)

                    });
                }else{
                    this.bus.emit("errorDepartements", "Aucun département recherché, erreur !");
                }
            }
        },
        mounted(){

                axios.get(`https://geo.api.gouv.fr/departements`).then((response) => {

                    this.departements = response.data

                }).catch((error) => {

                    console.log(error)

                });
        }
    });

</script>