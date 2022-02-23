const app = Vue.createApp({

    data() {

        return {
            tab: [],
            item: '',
            nomAff: '',
            affichage: true
        };
    },

    methods: {

        ajoutFilm() {
            this.nomAff = this.item;
            console.log(this.nomAff);
            this.tab.push(this.nomFilm);
            this.nomFilm = '',
                console.log(this.tab);
        },
        displayTab() {
            this.affichage = !this.affichage;

        },
        suppr(value) {
            this.tab.splice(value, 1);
        }

    },


});

app.mount('#monApp');