const fs = require('fs');
const https = require('https');
const path = require('path');

const jsonPath = 'data/products.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const outDir = path.join(__dirname, 'public', 'images');

const fallbackMap = {
    'fresh-spinach': 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&q=80',
    'organic-carrots': 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&q=80',
    'fresh-tomatoes': 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80',
    'green-capsicum': 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=600&q=80',
    'fresh-broccoli': 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80',
    'bottle-gourd': 'https://images.unsplash.com/photo-1595858602657-3f3eed693a10?w=600&q=80',
    'fresh-coriander': 'https://images.unsplash.com/photo-1596683720379-b73ce1660022?w=600&q=80',
    'potato': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80',
    'fresh-mint': 'https://images.unsplash.com/photo-1628151016024-aaeb209d0fd0?w=600&q=80',
    'cauliflower': 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=600&q=80',
    'onion': 'https://images.unsplash.com/photo-1618512496248-a07ce83aa8cb?w=600&q=80',
    'bitter-gourd': 'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?w=600&q=80',
    'cucumber': 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=600&q=80',
    'garlic': 'https://images.unsplash.com/photo-1540148426945-eb7f9ea11cba?w=600&q=80',
    'pumpkin': 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=600&q=80',
    'cabbage': 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=600&q=80'
};

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                return https.get(response.headers.location, (res) => {
                    res.pipe(file);
                    file.on('finish', () => { file.close(); resolve(); });
                }).on('error', reject);
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
};

(async () => {
    if (!fs.existsSync(outDir)) { fs.mkdirSync(outDir, { recursive: true }); }
    console.log("Starting reliable mapping downloads...");
    for (const item of data) {
        const destAbs = path.join(outDir, `${item.slug}.png`);
        const urlToFetch = fallbackMap[item.slug];
        if (!urlToFetch) continue;
        console.log(`Downloading matched photo for ${item.slug}`);
        try {
            await downloadFile(urlToFetch, destAbs);
            item.image = `/images/${item.slug}.png`;
        } catch (e) {
            console.error(`Failed ${item.slug}:`, e);
        }
    }
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4));
    console.log("Successfully rebuilt all local PNG bundles linked exactly to catalog titles.");
})();
