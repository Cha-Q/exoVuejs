Vue.createApp({

    data() {
        return {

            value: 'Vous êtes ?',
            valeurNom: '',
            unNom: ''
        };
    },

    methods: {
        capterEventInput($event) {

            this.value = $event.target.value;
        },


        capterEventClick() {
            this.unNom = this.valeurNom;
            return alert('Attention !');

        }
    },

}).mount('#app');