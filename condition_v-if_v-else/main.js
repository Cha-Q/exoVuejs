const app = Vue.createApp({

    data() {

        return {
            tab: [],
            nomFilm: '',
            nomAff: ''
        };
    },

    methods: {

        ajoutFilm() {
            this.nomAff = this.nomFilm;
            console.log(this.nomAff);
            this.tab.push(this.nomFilm);
            this.nomFilm = '',
                console.log(this.tab);
        },
        emptyTab() {
            this.tab = [];
            this.nomFilm = '';

        }

    },


});

app.mount('#monApp');




//