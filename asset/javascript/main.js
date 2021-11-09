

var app = new Vue({
     el: '#app',
     data: {
          messaggioProva : "ciao",
          email : "",
          emails : [],
     },

     mounted(){

          for (i=0; i <= 9; i++){
               axios("https://flynn.boolean.careers/exercises/api/random/mail")
               .then(resp =>{
                    //console.log(resp)
                    this.email = resp.data.response
                    //console.log(this.email)
                    this.emails.push(this.email)
                    //console.log(this.emails)
               })
               
          }

     }
})













