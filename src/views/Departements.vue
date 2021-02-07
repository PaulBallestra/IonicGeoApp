<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title> Départements</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large"> Départements</ion-title>
                </ion-toolbar>
            </ion-header>

            <div id="container">

                <!-- Search -->
                <SearchList></SearchList>

                <!-- Affichage du nombre de résultat -->
                <p class="text-center mt-2 m-3" id="pDepartementNumberOf"> </p>

                <Departement></Departement>

            </div>

        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
    import SearchList from "../components/SearchList.vue";
    import Departement from "../components/Departement.vue";

    export default {
        name: 'Departements',
        components: {
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage,
            SearchList,
            Departement
        },
        mounted(){

            this.bus.on("displayNumberOfDepartements", number => {

                if(number !== 0)
                    document.getElementById('pDepartementNumberOf').innerHTML = number + (number > 1 ? ' Résultats' : ' Résultat');
                else{ //Si il n'y a aucun résultats
                    document.getElementById('pDepartementNumberOf').innerHTML = 'Aucun résultats. Veuillez tenter autre chose.';
                }

            });

            this.bus.on("errorDepartements", error => {

                document.getElementById('pDepartementNumberOf').innerHTML = error;

            });
        }
    }
</script>