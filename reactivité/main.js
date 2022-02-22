const monApp = Vue.createApp({

    data() {
        return {
            rdm: 0,
            nombreMyst: 0,
            check: 0,
            uneString: 'Faites vos jeux !',
            horsJeu: 'display: ;',
            jeu: 'display:none;',
            compteurV: 0,
            compteurD: 0,
            cond: 'color: black',
            rep: '',
        };
    },
    methods: {
        start() {
            this.rdm = Math.floor(Math.random() * (21)) + 1;
            console.log(`le numéro gagnant est le ${this.rdm}`);
            this.uneString = 'Faites vos jeux !';
            this.horsJeu = 'display:none;';
            this.jeu = 'display: ;'
        },
        reset() {
            window.location.reload();
        }

    },
    watch: {
        nombreMyst(value) {
            if (this.rdm == this.nombreMyst) {
                this.rep = 'Bravo c\'est gagné !';
                this.cond = 'color: green';
                this.compteurV++;
                this.nombreMyst = 0;
                return this.start();

            } else if (this.rdm < this.nombreMyst) {
                this.rep = 'Votre nombre est trop grand, c\'est perdu !';
                this.cond = 'color: red';
                this.compteurD++;
                this.nombreMyst = 0;
                return this.start();

            }
            // this.check = this.nombreMyst;
            setTimeout(() => {
                if (this.nombreMyst === value && this.nombreMyst > 0) {

                    this.nombreMyst = 0;
                    this.uneString = 'Vous avez été trop long, veuillez jouer à nouveau';

                    console.log('Fin du jeu. La partie va recommencer');
                    return this.start();
                }
            }, 5000);

        }

    },





}, );

monApp.mount('#monApp');