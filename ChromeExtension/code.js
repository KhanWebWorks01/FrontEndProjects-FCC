let myLeads = [];
let oldLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn =  document.getElementById("input-btn");
const ulEl =document.querySelector("#ul-el");
// localStorage.setItem("myName","Per Harald Borgen");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    })
})
function render(leads){
    for(let i= 0; i<leads.length; i++)
    {
        ulEl.innerHTML +=`<
        <li>
            <a target='_blank' href ='${leads[i]}'>
            ${leads[i]}
            </a>
        </li>
        `;
    }
}

// 2. Listen for double clicks on the delete button
// 3. When clicked, clear localStorage, myLeads, and 

deleteBtn.addEventListener("click", function() {
    window.localStorage.clear();
    myLeads = [];
    render(myLeads);
});

inputBtn.addEventListener("click",function saveLead(){
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});