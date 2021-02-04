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



                <!-- Affichage du nombre de résultat -->
                <p class="text-center mt-2 m-3" id="pNumberOf"> </p>



            </div>

        </ion-content>
    </ion-page>
</template>

<script>
    import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';

    export default {
        name: 'Departements',
        components: {
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage,
        },
        mounted(){
            this.bus.on("displayNumberOfDepartements", number => {

                if(number !== 0)
                    document.getElementById('pNumberOf').innerHTML = number + (number > 1 ? ' Résultats' : ' Résultat');
                else{ //Si il n'y a aucun résultats
                    document.getElementById('pNumberOf').innerHTML = 'Aucun résultats. Veuillez tentez autre chose.';
                }

            });
        }
    }
</script>