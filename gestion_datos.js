// Define a products object  
const products = {  
    1: {id: 1, name: "Laptop", price: 1500},  
    2: {id: 2, name: "Celular", price: 800},  
    3: {id: 3, name: "Tablet", price: 600}  
}  
console.log("Products object:", products);  
  
// Convert an object to a Set to remove duplicates  
const setProducts = new Set(Object.values(products).map(product => product.name));  
console.log("Set of unique products:", setProducts);  
  
// Create a Map to assign categories to products  
const mapProducts = new Map([  
    ["Electronics", "Laptop"],  
    ["Telephony", "Celular"],  
    ["Tablets", "Tablet"]
]);  
console.log("Map of products by category:", mapProducts);  

// Iterate through the products object using for...in  
for (const id in products) {  
    console.log(`Product ID: ${id}, Details:`, products[id]);  
}  

// Iterate through the Set of products using for...of  
for (const product of setProducts) {  
    console.log("Unique product:", product);  
}  

// Iterate through the Map of products using forEach  
mapProducts.forEach((product, category) => {  
    console.log(`Category: ${category}, Product: ${product}`);  
});  

console.log("Data management tests completed: ");  
console.log("List of products (Object): ");  
console.table(products);  
console.log("List of unique products (Set): ");  
console.table(Array.from(setProducts.entries()).map(([product]) => ({ product })));  
console.log("Product categories (Map): ");  
console.table(Array.from(mapProducts.entries()).map(([category, product]) => ({ category, product })));  
  
//Function to create an HTML table from an array of objects  
function renderTable(headers, rows) {  
    let thead = `<thead><tr>${headers.map(head => `<th>${head}</th>`).join('')}</tr></thead>`;  
    let tbody = `<tbody>${rows.map(row =>  
        `<tr>${headers.map(head => `<td>${row[head]}</td>`).join('')}</tr>`).join('')}</tbody>`;  
    return `<table>${thead}${tbody}</table>`;  
}  

// Products table (Object)  
const productsArray = Object.values(products);  
document.getElementById('tabla-objeto').innerHTML = renderTable(  
    ['id', 'name', 'price'],  
    productsArray 
);  

// Unique products table (Set)  
const setArray = Array.from(setProducts).map(product => ({ product }));  
document.getElementById('tabla-set').innerHTML = renderTable(  
    ['product'],  
    setArray  
);  

// Categories table (Map)  
const mapArray = Array.from(mapProducts.entries()).map(([category, product]) => ({ category, product }));  
document.getElementById('tabla-map').innerHTML = renderTable(  
    ['category', 'product'],  
    mapArray  
);  