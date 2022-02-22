const app = Vue.createApp({

    data() {

        return {

            selectCard1: false,
            message: '',
            message2: '',
            selectClass1: true,
            oneColor: random(),
        };
    },

    methods: {
        selectionCard(uneCard) {
            if (uneCard == 1) {
                this.selectCard1 = !this.selectCard1;



            }
        },


    },
    computed: {
        bonjour() {
            if (this.message === 'hello') {
                console.log(random());
                return this.oneColor = random();
            } else if (this.message === 'world') {
                console.log('aurevoir');
                return this.oneColor = random();
            } else {
                return `background-color: blue;`;
            }
        },
        color() {
            return `background-color: ${this.message2};`;
        }
    }

});

app.mount('#monApp');


function random() {
    return "background-color:" + '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}


//