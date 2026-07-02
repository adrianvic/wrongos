let paramString = window.location.href.split('?')[1];
let queryString = new URLSearchParams(paramString);
let current = queryString.get("current");
let action = queryString.get("action");

let addresses = [];

ringMembers.forEach(member => {
    addresses.push(member.link);
});

let currentIndex = addresses.indexOf(current);

switch (action) {
    case "next":
        let nIndex = currentIndex - 1;
        if (nIndex > addresses.length -1) {
            nIndex = 0;
        }
        window.location.href = addresses[nIndex];
        break;
    
    case "previous":
        let pIndex = currentIndex - 1;
        if (pIndex < 0) {
            pIndex = addresses.length - 1;
        }

        window.location.href = addresses[pIndex];
        
    default:
        let main = document.querySelector("main");
        main.innerHTML = `
            <p style="color: red">Error while redirecting: invalid query</p>
            <p>Debug data (send this to the website maintainer) -> action = ${action}, current = ${current}</p>
            `;
        break;
}