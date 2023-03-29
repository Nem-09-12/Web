const app = Vue.createApp({
    data() {
        return {
            products: [
                {
                    name: "A",
                    price: 1200,
                },
                {
                    name: "B",
                    price: 1200,
                },
                {
                    name: "C",
                    price: 1200,
                },
                {
                    name: "D",
                    price: 1200,
                },
            ]
        };
    },
    methods: {
        
    },
})

app.mount('#contact')