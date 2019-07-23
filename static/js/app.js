// from data.js
var tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(tableData);

// Build table
function buildTable(data){
    // Clear existing data
    tbody.html("");
    // Loop through 'data'
    data.forEach((dataRow) => {
        // Append table row 'tr'
        let row = tbody.append("tr");
        // Iterate through values
        Object.values(dataRow).forEach((value) => {
            // Append a cell to the row for each value
            let cell = row.append("td");
            cell.text(value);
        });
    })
}

// This function is triggered when the button is clicked
function handleClick(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Get the value property of the input element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;
    // Filter data to match date entered
    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build table
    buildTable(filterData);
}
// Attach an event to the handler function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js 
buildTable(tableData);
