<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <div class="d-flex flex-row">
                    <ion-title> Communes</ion-title>
                    <ion-title slot="end" class="ion-no-padding w-auto"> 🇫🇷 France</ion-title>
                </div>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large"> Communes</ion-title>
                </ion-toolbar>
            </ion-header>

            <div id="container">

                <!-- Composant de recherche -->
                <Search></Search>

                <!-- Affichage du nombre de résultat -->
                <p class="text-center mt-2 m-3" id="pNumberOf"> </p>

                <!-- Composant qui affichera toutes les communes renvoyées -->
                <Commune></Commune>

            </div>

        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
    import Commune from '../components/Commune.vue';
    import Search from '../components/Search.vue';

    export default {
        name: 'Communes',
        components: {
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage,
            Commune,
            Search
        },
        mounted(){
            this.bus.on("displayNumberOfCommunes", number => {

                if(number !== 0)
                    document.getElementById('pNumberOf').innerHTML = number + (number > 1 ? ' Résultats' : ' Résultat');
                else{ //Si il n'y a aucun résultats
                    document.getElementById('pNumberOf').innerHTML = 'Aucun résultats. Veuillez tentez autre chose.';
                }

            });
        }
    }
</script>