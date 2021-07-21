
const bulbLight = {
    data() {
        return {
            isLighton: false,
            isLightoff: true
        }
    },
    methods: {
        on: function () {
            this.isLighton = true
            this.isLightoff = false
        },
        off: function () {
            this.isLighton = false
            this.isLightoff = true
        }
    }
}

Vue.createApp(bulbLight).mount("#test");