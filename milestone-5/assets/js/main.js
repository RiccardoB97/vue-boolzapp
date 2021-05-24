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
                lastAccess: dayjs().format('hh:mm'),
                messages: [
                    {
                        date: dayjs('10/01/2020 15:30:55').format('HH:mm'),
                        text: 'Yo bro you wanna play some Warzone?',
                        status: 'received'
                    },
                    {
                        date: dayjs('10/01/2020 15:50:00').format('HH:mm'),
                        text: "I might jump on later, really busy now",
                        status: 'sent'
                    },
                    {
                        date: dayjs('10/01/2020 16:15:22').format('HH:mm'),
                        text: "I'd want to but gotta learn VueJS. 🙃",
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Rudyn',
                avatar: './assets/img/avatar_2.jpg',
                visible: false,
                lastAccess: dayjs().format('hh:mm'),
                messages: [
                    {
                        date: dayjs('20/03/2020 16:30:00').format('HH:mm'),
                        text: 'You on bro?',
                        status: 'sent'
                    },
                    {
                        date: dayjs('20/03/2020 16:30:55').format('HH:mm'),
                        text: 'No mate, Milly and Fraser are here',
                        status: 'received'
                    },
                    {
                        date: dayjs('20/03/2020 16:35:00').format('HH:mm'),
                        text: 'Zero problem brother',
                        status: 'sent'
                    }
                ],
            },

            {
                name: 'Anthony',
                avatar: './assets/img/avatar_3.jpg',
                visible: false,
                lastAccess: dayjs().format('hh:mm'),
                messages: [
                    {
                        date: dayjs('28/03/2020 10:10:40').format('HH:mm'),
                        text: 'Wanna go with uncle bruno for a pint down the shore? 🎱🍻',
                        status: 'received'
                    },
                    {
                        date: dayjs('28/03/2020 10:20:10').format('HH:mm'),
                        text: 'Only if we get kebab for dinner!',
                        status: 'sent'
                    },
                    {
                        date: dayjs('28/03/2020 16:15:22').format('HH:mm'),
                        text: 'We have a deal',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Jordan',
                avatar: './assets/img/avatar_7.jpg',
                visible: false,
                lastAccess: dayjs().format('hh:mm'),
                messages: [
                    {
                        date: dayjs('10/01/2020 15:30:55').format('HH:mm'),
                        text: 'What you having for dinner?',
                        status: 'sent'
                    },
                    {
                        date: dayjs('10/01/2020 15:50:00').format('HH:mm'),
                        text: 'Guess what?! KFC 😂',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro',
                avatar: './assets/img/avatar_8.jpg',
                lastAccess: dayjs().format('hh:mm'),
                visible: true,
                messages: [
                    {
                        date: dayjs('20/03/2020 16:30:00').format('HH:mm'),
                        text: 'Wanna come for dinner tonight?',
                        status: 'received'
                    },
                    {
                        date: dayjs('20/03/2020 16:30:55').format('HH:mm'),
                        text: 'What are you cooking? I ll bring the wine! 🍷',
                        status: 'sent'
                    },
                    {
                        date: dayjs('20/03/2020 16:35:00').format('HH:mm'),
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
            activeContact.messages.push({
                date: dayjs().format('HH:mm'),
                text: this.message,
                status: "sent"
            })
            return this.message = '', setTimeout(activeContact.messages.push({
                date: dayjs().format('HH:mm'),
                text: "ok",
                status: "received"
            }), 1000)
        },
        deleteMessage(message) {
            return message.text = ''
        }
    },


})

