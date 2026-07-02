let paramString = window.location.href.split('?')[1];
let queryString = new URLSearchParams(paramString);
let current = queryString.get("current");
let action = queryString.get("action");
let main = document.querySelector("main");

let addresses = [];

ringMembers.forEach(member => {
    addresses.push(member.link);
});

let currentIndex = addresses.indexOf(current);

if (currentIndex === -1) {
    main.innerHTML = `
            <p style="color: red">Not in the webring yet!</p>
            <p>Debug data (send this to the website maintainer) -> action = ${action}, current = ${current}</p>
            `;
} else {
    switch (action) {
    case "next": {
        let nIndex = currentIndex + 1;
        if (nIndex >= addresses.length) {
            nIndex = 0;
        }

        window.location.href = addresses[nIndex];
        break;
    }

    case "previous": {
        let pIndex = currentIndex - 1;
        if (pIndex < 0) {
            pIndex = addresses.length - 1;
        }

        window.location.href = addresses[pIndex];
        break;
    }
        
    default:
        main.innerHTML = `
            <p style="color: red">Error while redirecting: invalid query</p>
            <p>Debug data (send this to the website maintainer) -> action = ${action}, current = ${current}</p>
            `;
        break;
}
}