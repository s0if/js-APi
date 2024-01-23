async function proudcts() {
    let prodect = await fetch("https://dummyjson.com/products");
    let data = await prodect.json();
    ; let results = data.products.map(function (result) {
        return `
        <div class="hero">
        <div class="resort">
        <img src="${result.thumbnail}"/>
        <div class="info">
        <h1>${result.id}</h1>
        <h1>${result.title}</h1>    
        <h1>${result.price}</h1>
        </div>
        </div>
        </div >
    `
    }).join("");
    document.querySelector(".arr").innerHTML = results;
}
proudcts();