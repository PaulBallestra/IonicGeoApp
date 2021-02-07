<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <div class="d-flex flex-row">
                    <ion-title> Régions</ion-title>
                </div>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large"> Régions</ion-title>
                </ion-toolbar>
            </ion-header>

            <div id="container">

                <!-- Composant de recherche -->
                <SearchListRegion></SearchListRegion>

                <!-- Affichage du nombre de résultat -->
                <p class="text-center mt-2 m-3" id="pRegionsNumberOf"></p>

                <!-- Composant qui affichera toutes les communes renvoyées -->
                <Region></Region>

            </div>

        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
    import SearchListRegion from "../components/SearchListRegions.vue";
    import Region from "../components/Region.vue";

    export default {
        name: 'Regions',
        components: {
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage,
            SearchListRegion,
            Region
        },
        mounted(){
            this.bus.on("displayNumberOfRegions", number => {

                if(number !== 0)
                    document.getElementById('pRegionsNumberOf').innerHTML = number + (number > 1 ? ' Résultats' : ' Résultat');
                else{ //Si il n'y a aucun résultats
                    document.getElementById('pRegionsNumberOf').innerHTML = 'Aucun résultats. Veuillez tenter autre chose.';
                }

            });

            this.bus.on("errorRegions", error => {

                document.getElementById('pRegionsNumberOf').innerHTML = error;

            });
        }
    }
</script>