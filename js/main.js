

const app = new Vue({
    el:'#root',
    data:{
         imgArr: ['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg', 'img/image4.jpg'],
         indexImg: 0

    },
    methods:{
        arrowLeft: function(){
            if (this.indexImg === 0) {
                return this.indexImg = this.imgArr.length-1;
            } else {
                return this.indexImg--;
            }
            
        },
        arrowRight: function () {
           if (this.indexImg === this.imgArr.length - 1){
              return this.indexImg = 0;
           }else{
               return this.indexImg++;
           }
        }
    }
})