//console.dir(document);
//console.log(document.domain);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);

document.title = "DOM vezba";

let items = document.getElementById("items");
let listItems = document.getElementsByClassName("list-item");

for(let i=0; i < listItems.length; i++)
{
    listItems[i].style.color = "white";
    if(i%2==0)
    {
        listItems[i].style.backgroundColor = "#7C1AC9";
    }
    else listItems[i].style.backgroundColor = "#200E6F";
}

//getElementByTagName
let title=document.getElementsByClassName("title")
title[1].textContent="HVALA DARKO"

listItems[3].textContent="cetvrti"
listItems[3].style.backgroundColor="red"

console.log(items.previousElementSibling);
console.log(items.previousElementChild);

console.log(items.previousElementSibling);

items.previousElementSibling.style.color = "brown"

console.log(items.nextElementSibling)

let drugiElement = document.getElementsByClassName("čist-item")[1];

drugiElement.parentElement.previousElementSibling.style.backgroundColor = "blue"
