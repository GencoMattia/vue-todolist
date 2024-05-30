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
            ],

            newTaskText: "", 
        }
    },

    methods: {
        toggleDone(taskIndex) {
            if (this.tasksList[taskIndex].done === false) {
                this.tasksList[taskIndex].done = true;
                console.log(this.tasksList[taskIndex].done); // Use 'this' here
            } else {
                this.tasksList[taskIndex].done = false;
                console.log(this.tasksList[taskIndex].done); // Use 'this' here
            }
        },

        removeTask(taskIndex){
            this.tasksList.splice(taskIndex, 1);
        },

        createNewTask() {
            const newTask = [
                text= "",
                done= false
            ];
            if(this.newTaskText.trim() !== "") {
                newTask.text = this.newTaskText.trim();
                this.tasksList.push(newTask);
                this.newTaskText = "";
            }
        }
    }
}).mount('#app')