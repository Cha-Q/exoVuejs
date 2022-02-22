const app = Vue.createApp({

    data() {
        return {

            selectCard1: false,
            selectCard2: false,
            message: '',
            message2: '',
            selectClass1: true


        };
    },

    methods: {
        selectionCard(uneCard) {
            if (uneCard == 1) {
                this.selectCard1 = !this.selectCard1;



            }
        },

        // selectClass{

        //     if (this.message === 'world') {
        //         return selectClass1;
        //     } else if (this.message === 'hello') {
        //         return selectClass2;
        //     }
        // }

    },
    computed: {
        bonjour() {
            if (this.message === 'hello') {
                return 'maClasseHello';
            } else if (this.message === 'world') {
                return 'maClasseWorld';
            }
        },
        color() {
            return `background-color: ${this.message2};`;
        }
    }

});

app.mount('#monApp');