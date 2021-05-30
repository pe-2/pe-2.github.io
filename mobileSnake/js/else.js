var header = new Vue({
    el: ".head",
    data: {
        header: '精美贪吃蛇 by 晓冬',
    }
})

var score = new Vue({
    el: '.score',
    data: {
        score: 0
    }
})

var speedControl = new Vue({
    el: '.speed-control',
    data: {
        speed: '100',
    }
})