Vue.createApp({

    data() {
        return {
            img: 'https://picsum.photos/200',
            nom: 'george',
            nomLog: '',
            age: 30,
            agePlus: 30,

        };
    },

    methods: {
        randomNumber: function() {

            return Math.random();
        },
        addDix() {

            return this.agePlus + 10;
        }
    },

}).mount('#app');