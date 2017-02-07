
new Vue ({
    el:'#clock',
    data: {
       digitalClock:'clock loading..'
    },
    methods:{
    getClock(){
        var that = this
        setInterval(function(){
            var date = new Date();
            var hour = date.getHours();
            if(hour <= 9) hour +'0';
            var ampm = 'am';
            if(hour>=12) ampm='pm';
            var minutes = date.getMinutes();
            if(minutes <= 9) minutes +'0';
            var seconds = date.getSeconds();
            if(seconds <= 9) seconds +'0';
            var digital_clock = hour + ' : ' + minutes + ' : ' + seconds + ampm;

            that.digitalClock = digital_clock;

        }, 1000);
        console.log(this.digitalClock)
    }
    },
    mounted(){
        this.getClock()
    }

})