const app = new Vue({
    el: '#app',
    data: {

        myAvatar: "./assets/img/avatar_5.jpg",
        contacts: [
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_4.jpg',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Oh Zio giochiamo a Warzone?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Magari piu tardi, ora non posso!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Vorrei ma devo imparare VueJS.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Rudyn',
                avatar: './assets/img/avatar_2.jpg',
                visible: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Anthony',
                avatar: './assets/img/avatar_3.jpg',
                visible: false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Jordan',
                avatar: './assets/img/avatar_7.jpg',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro',
                avatar: './assets/img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Tutto a posto zi?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        ]

    },
    methods: {
        showChat(user) {

        }
    }
}
)


