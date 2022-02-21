const monApp = Vue.createApp({

    data() {
        return {
            rdm: 0,
            nombreMyst: 0,
            check: 0,
            uneString: 'Faites vos jeux !',
            horsJeu: 'display: ;',
            jeu: 'display:none;'
        };
    },
    methods: {
        start() {
            this.rdm = Math.floor(Math.random() * (21)) + 1;
            console.log(this.rdm);
            this.horsJeu = 'display:none;';
            this.jeu = 'display: ;'
        },

    },
    watch: {
        nombreMyst(value) {
            if (this.rdm == this.nombreMyst) {
                this.uneString = 'Bravo c\'est gagné !'
            } else if (this.rdm < this.nombreMyst) {
                this.uneString = 'Votre nombre est trop grand, c\'est perdu !'
            } else {
                this.uneString = 'Faites vos jeux !';
            }
            // this.check = this.nombreMyst;
            setTimeout(() => {
                if (this.nombreMyst === value && this.nombreMyst > 0) {
                    this.nombreMyst = 0;
                    this.uneString = 'Faites vos jeux !';
                    this.horsJeu = 'display: ;';
                    this.jeu = 'display:none;';
                    return console.log('stop');

                }
            }, 5000);
        }

    },





}, );

monApp.mount('#monApp');