Vue.createApp({

    data() {
        return {

            value: 'Vous êtes ?',
        };
    },

    methods: {
        capterEventInput($event) {

            this.value = $event.target.value;
        },
        capterEventClick() {
            return alert('Attention !');

        }
    },

}).mount('#app');