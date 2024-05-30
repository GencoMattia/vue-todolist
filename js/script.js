const { createApp } = Vue

createApp({
    data() {
        return {
            tasksList: [
                {
                    text: "Spada Vorpal+5",
                    done: false
                },
                {
                    text: "Zaino senza Fondo",
                    done: false
                },
                {
                    text: "Pozione di cura 2d6",
                    done: false
                },
                {
                    text: "Anello del Sostentamento",
                    done: false
                },
                {
                    text: "Tomo del Mago cattivo",
                    done: false
                },
                {
                    text: "Armatura di Mithril +2",
                    done: false
                },
            ]
        }
    }
}).mount('#app')