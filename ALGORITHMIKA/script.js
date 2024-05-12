// script.js
const inpt = document.getElementById("input");
const lst = document.getElementById("alllist");
const icn = document.querySelector(".sort");
const div = document.querySelector(".listdiv");
const icn2 = document.querySelector(".removeinput");
const data = [];
div.style.display = 'none';
icn.style.display = 'none';

function Add() {
    if (inpt.value === '') {
        return;
    } else {
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.innerHTML = `${inpt.value.trim()}`;
        data.push(inpt.value);
        lst.appendChild(li);
        div.style.display = 'block';
        icn.style.display = 'block';
        const removeIcon = document.createElement('i');
        removeIcon.className = 'fa-solid fa-xmark removetask';
        li.append(p);
        new Sortable(lst, {
            animation: 360,
            chosenClass: "boxShadow",
            dragClass: "drag",
        });
        li.appendChild(removeIcon);
        removeIcon.addEventListener('click', function () {
            li.remove();
        });
    }
    inpt.value = "";
}

let g = true;
icn.addEventListener('click', function () {
    const liList = document.querySelectorAll('li p');
    if (g) {
        data.sort();
        g = false;
    } else {
        data.reverse();
        g = true;
    }
    for (let i = 0; i < data.length; i++) {
        liList[i].innerText = data[i];
    }
});

icn2.addEventListener('click', function () {
    inpt.value = "";
});


document.getElementById("addButton").addEventListener("click", Add);


