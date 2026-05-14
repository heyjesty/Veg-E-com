const fs = require('fs');

const jsonPath = 'data/products.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const oldUIMap = {
    'fresh-spinach': '/images/spinach.svg',
    'organic-carrots': '/images/carrot.svg',
    'fresh-tomatoes': '/images/tomato.svg',
    'green-capsicum': '/images/capsicum.svg',
    'fresh-broccoli': '/images/broccoli.svg',
    'bottle-gourd': '/images/bottlegourd.svg',
    'fresh-coriander': '/images/coriander.svg',
    'potato': '/images/potato.svg',
    'fresh-mint': '/images/mint.svg',
    'cauliflower': '/images/cauliflower.svg',
    'onion': '/images/onion.svg',
    'bitter-gourd': '/images/bittergourd.svg',
    'cucumber': '/images/default-veg.svg',
    'garlic': '/images/default-veg.svg',
    'pumpkin': '/images/default-veg.svg',
    'cabbage': '/images/default-veg.svg'
};

data.forEach(item => {
    if (oldUIMap[item.slug]) {
        item.image = oldUIMap[item.slug];
    } else {
        item.image = '/images/default-veg.svg';
    }
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4));
console.log("Reverted UI back to early SVG structures!");
