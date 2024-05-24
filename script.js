let totalCost = 0;
const partlist = document.getElementById('partlist');
for(let i = 1; i < partlist.rows.length - 1; i++) {
    totalCost += parseFloat(partlist.rows[i].cells[1].textContent);
}
document.getElementById('totalcost').textContent = totalCost.toFixed(2);

// generate table of contents

const toc = document.getElementById('toc');
const headings = document.querySelectorAll('.main-text > div h1, .main-text > div h2');

console.log(toc);
console.log(headings);

for(let i = 0; i < headings.length; i++) {
    headings[i].id = i.toString();
    const reference = document.createElement('a');
    reference.textContent = headings[i].textContent;
    const depth = parseInt(headings[i].tagName[1], 10) - 1; // skip the 'h'
    reference.href = `#${i}`;
    if(depth > 0) {
        reference.classList.add('toc2');
    }
    toc.appendChild(reference);
}
