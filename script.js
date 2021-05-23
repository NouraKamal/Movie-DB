// part1&2
// -----
// var myHttp=new XMLHttpRequest();
// var allPosts;
// myHttp.open("GET","https://jsonplaceholder.typicode.com/posts");
// myHttp.send();

// myHttp.addEventListener("readystatechange",function(){
//     if(myHttp.readyState==4&&myHttp.status==200){
// allPosts=JSON.parse(myHttp.response);
// displayPosts()
//     }
// })
// function displayPosts(){
//     var cartoona=``;
//     for(var i=0;i<allPosts.length;i++){
//         cartoona+=` <div class="col-md-3"> 
//         <h3>${allPosts[i].title}</h3>
//         <p>${allPosts[i].body}</p>
//         </div>`
//     }
//     document.getElementById("rowData").innerHTML=cartoona;
// }
// -----------------------------------------------------------------
// part3
var myHttp=new XMLHttpRequest();
var allMovies;
myHttp.open("GET","https://api.themoviedb.org/3/trending/all/day?api_key=298a9d7e45243c18797ec4d6fe3de417");
myHttp.send();

myHttp.addEventListener("readystatechange",function(){
    if(myHttp.readyState==4&&myHttp.status==200){
allMovies=JSON.parse(myHttp.response).results;
displayMovies()
    }
})
function displayMovies(){
    var cartoona=``;
    for(var i=0;i<allMovies.length;i++){
        cartoona+=` <div class="col-md-3">
        <div class="movie position-relative">
        <img src="https://image.tmdb.org/t/p/w500/${allMovies[i].poster_path}" class="w-100"/>
        <h3>${allMovies[i].title}</h3>
        <p>${allMovies[i].overview.split(" ").slice(0,10).join(" ")}</p>
        <div class="vote bg-info p-2 font-weight-bold position-absolute">${allMovies[i].vote_average}</div>
        </div> 
        </div>`
    }
    document.getElementById("rowData").innerHTML=cartoona;
}
// ----------------------------------------------------------------------------------------------------------------------
// // part 6
// let person={
//     name:"hambozo",
//     age:26,
//     salary:6000,
//     calcSalary:function(){
//         let calcTax=()=> this.salary*0.1;
    
//         return this.salary-calcTax();
//     }
// }
// console.log(person.calcSalary());