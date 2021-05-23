
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
