<template>

    <ion-list>
        <ion-item>
            <ion-grid>
                <ion-row>
                    <ion-label class="m-auto"> <strong> Code postal ou ville </strong> </ion-label>
                </ion-row>
                <ion-row>
                    <p class="m-auto text-center"> Recherchez par nom ou par code pour trouver ce que vous cherchez </p>
                </ion-row>
                <ion-row>
                    <ion-input placeholder="78630 ou Orgeval" class="ion-text-center" id="inputCommune" type="text"></ion-input>
                </ion-row>
                <ion-row class="mt-3 mb-2">
                    <ion-button class="m-auto w-100" @click="displayCommunes"> Valider </ion-button>
                </ion-row>
            </ion-grid>
        </ion-item>
    </ion-list>

</template>

<script>

    import { defineComponent } from 'vue';
    import { IonList, IonItem, IonGrid, IonRow, IonLabel, IonInput, IonButton } from '@ionic/vue';
    import { axios } from '@/plugins/axios'

    export default defineComponent({

        name: "Search",
        data(){
            return {
                searchType: null,
            }
        },
        components: {
            IonList,
            IonItem,
            IonGrid,
            IonRow,
            IonLabel,
            IonInput,
            IonButton
        },
        methods: {

            displayCommunes: function(e)
            {

                e.preventDefault();

                let inputCommune = document.getElementById('inputCommune').value;
                let inputParseInt = parseInt(inputCommune); //on le parseInt pour le tester ensuite
                let queryType = null; //queryType qui servira a orienter la requete en fonction de l'input

                //Test de si l'input est vide
                if(inputCommune !== "")
                {
                    //Si c'est int, on lance la requete avec le code postal
                    if(Number.isInteger(inputParseInt))
                        queryType = 'codePostal';
                    else //Sinon on lance la requete normale, avec le nom
                        queryType = 'nom';

                    //Requete avec le nom passé en input
                    axios.get('https://geo.api.gouv.fr/communes?'+ queryType + '=' + inputCommune + '&boost=population').then((response) => {

                        this.bus.emit("displayCommunes", response.data);
                        this.bus.emit("displayNumberOfCommunes", response.data.length);

                    }).catch((error) => {

                        console.log(error)

                    })
                }else{

                    this.bus.emit("errorCommunes", "Aucune commune recherchée, erreur.")

                }

            }
        },
        mounted(){

        }
    });

</script>