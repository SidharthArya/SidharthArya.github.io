const app1=new Vue({el:"#app1",data:{quote:"Quote",quoteauthor:"Author"},created(){fetch("https://api.quotable.io/random?maxLength=80").then(t=>t.json()).then(t=>{this.quote=t.content,this.quoteauthor=t.author})}}),contributions=new Vue({el:"#Contributions",data:{packages:[]},created(){fetch("https://api.github.com/users/sidhartharya/repos?sort=updated'").then(t=>t.json()).then(t=>{this.packages=t})}}),stars=new Vue({el:"#Stars",data:{stars:[]},created(){fetch("https://api.github.com/users/sidhartharya/starred?per_page=100'").then(t=>t.json()).then(t=>{this.stars=t})}}),following=new Vue({el:"#Following",data:{following:[]},created(){fetch("https://api.github.com/users/sidhartharya/following?per_page=100").then(t=>t.json()).then(t=>{this.following=t})}});