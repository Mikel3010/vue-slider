const {createApp} = Vue;

createApp({
    data(){
        return{
            activeImage: 0,
            activeTitle: 0,
            activeText: 0,
            acttiveTumbs: 0,
            movie:{
                image: [
                    'img/01.webp',
                    'img/02.webp',
                    'img/03.webp',
                    'img/04.webp',
                    'img/05.webp',
                ],
                title: [
                    'Marvel\'s Spiderman Miles Morale',
                    'Ratchet & Clank: Rift Apart',
                    'Fortnite',
                    'Stray',
                    "Marvel's Avengers",
                ],
                text: [
                    'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                ]
            },
        }
    },
    methods: {
        nextImage(){
            this.activeImage++;
            this.activeText++;
            this.activeTitle++;

            if(this.activeImage > this.movie.image.length - 1 && 
                this.activeTitle > this.movie.title.length - 1 &&
                this.activeText > this.movie.text.length - 1){
                this.activeImage = 0;
                this.activeTitle = 0;
                this.activeText = 0;
            }
        },
        prevImage(){
            this.activeImage--;
            this.activeTitle--;
            this.activeText--;
            if(this.activeImage < 0 && this.activeTitle < 0 && this.activeText < 0){
                this.activeImage = this.movie.image.length - 1;
                this.activeTitle = this.movie.title.length - 1;
                this.activeText = this.movie.text.length - 1;
            }
        },
        selectImg(index, event){
            console.log(index)
            this.activeImage = index
            document.querySelector('.thumb').classList.add('active')

        }
    }
}).mount('#app')