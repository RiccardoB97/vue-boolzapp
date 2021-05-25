const app = new Vue({
    el: '#app',
    data: {
        search: '',
        message: '',
        activeContact: 0,
        myAvatar: "./assets/img/avatar_5.jpg",
        contacts: [
            {
                name: 'Fabio',
                avatar: './assets/img/avatar_4.jpg',
                visible: false,
                lastAccess: dayjs('01/10/2020 16:15:22').format('DD/MM/YY HH:mm'),
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Yo bro you wanna play some Warzone?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: "I might jump on later, really busy now",
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: "I'd want to but gotta learn VueJS. 🙃",
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Rudyn',
                avatar: './assets/img/avatar_2.jpg',
                visible: false,
                lastAccess: dayjs('03/20/2020 16:35:00').format('DD/MM/YY HH:mm'),
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'You on bro?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'No mate, Milly and Fraser are here',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Zero problem brother',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Anthony',
                avatar: './assets/img/avatar_3.jpg',
                visible: false,
                lastAccess: dayjs('03/28/2020 16:15:22').format('DD/MM/YY HH:mm'),
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'Wanna go with uncle bruno for a pint down the shore? 🎱🍻',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Only if we get kebab for dinner!',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'We have a deal',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Jordan',
                avatar: './assets/img/avatar_7.jpg',
                visible: false,
                lastAccess: dayjs('01/10/2020 15:50:00').format('DD/MM/YY HH:mm'),
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'What you having for dinner?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Guess what?! KFC 😂',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro',
                avatar: './assets/img/avatar_8.jpg',
                lastAccess: dayjs('03/20/2020 16:35:00').format('DD/MM/YY HH:mm'),
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Wanna come for dinner tonight?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'What are you cooking? I ll bring the wine! 🍷',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Gonna make cavatelli ai frutti di maree',
                        status: 'received'
                    }
                ],
            },
        ]

    },
    methods: {
        // Shows the chat with the active contact
        showChat(index) {
            return this.activeContact = index
        },
        // Adds a new message
        addMessage(activeContact) {
            if (this.message !== '') {
                activeContact.messages.push({
                    date: dayjs().format('HH:mm'),
                    text: this.message,
                    status: "sent"
                })
                return this.message = '', setTimeout(activeContact.messages.push({
                    date: dayjs().format('HH:mm'),
                    text: "ok",
                    status: "received"
                }), 1000), activeContact.lastAccess = dayjs().format('HH:mm')
            }
        },
        deleteMessage(message) {
            return message.text = ''
        }
    },


})

