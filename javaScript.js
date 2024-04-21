let key = "b4b8d35a35054f92ac54d34a4a2f9a77";
let ResCard=document.querySelector(".ResCard");
let Search_btn =document.getElementById("Search_btn");
let inputData =document.getElementById("inputData");
let newsType= document.getElementById("type");


const getData = async(input) =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles[0]);
   
    newsType.innerText="Search :"+input;
    inputData.value="";
    ResCard.innerHTML="";
   jsonData.articles.forEach(function(article){
     console.log(article);
    
     let divs = document.createElement("div")
     divs.classList.add("card");
     ResCard.appendChild(divs);

     divs.innerHTML=`
     <img src="${article.urlToImage}" alt="pic">
    
     <h3>${article.title}</h3>
     <p>${article.description}</p>
     `
     divs.addEventListener("click",function(){
        window.open(article.url);
     })
   })


}
window.addEventListener("load",function(){
    getData("Delhi")
})
window.add
Search_btn.addEventListener("click",function()
{
    let inputText =inputData.value;
    getData(inputText);  
})

function navClick(navName){
    getData(navName)
}