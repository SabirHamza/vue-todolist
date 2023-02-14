const {createApp} = Vue;

const app = createApp ({
    data () {
        return {
            todolist : [
                {
                    text: "lavare i piatti",
                    done: false,
                },

                {
                    text: "fare la spesa",
                    done: false,
                },

                {
                    text: "stendere i panni",
                    done: false,
                }
            ]
        }
    },

    methods: {
        donetodo(index){
            this.todolist[index].done = !this.todolist[index].done
            console.log(this.todolist[index].done);
        },

        removetodo(index){
            console.log(this.todolist[index]);
            this.todolist.splice(index, 1);  
        }
    }
}); 

app.mount("#root");