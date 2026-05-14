const fs = require('fs');
const https = require('https');
const path = require('path');

const jsonPath = 'data/products.json';
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const outDir = path.join(__dirname, 'public', 'images');

const downloadFile = (url, dest) => {
    return new Promise((resolve, reject) => {
        if (!url.startsWith('http')) {
            // Already local file (like /images/real_spinach.png), try to copy it.
            const localSource = path.join(__dirname, 'public', url.replace('/images/', 'images/'));
            if (fs.existsSync(localSource)) {
                fs.copyFileSync(localSource, dest);
            }
            return resolve();
        }
        
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                // handle redirect
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
    console.log("Starting downloads...");
    for (const item of data) {
        const destRelative = `/images/${item.slug}.png`;
        const destAbs = path.join(outDir, `${item.slug}.png`);
        
        console.log(`Processing ${item.slug}... (from ${item.image})`);
        try {
            await downloadFile(item.image, destAbs);
            item.image = destRelative;
        } catch (e) {
            console.error(`Failed to download ${item.slug}:`, e);
        }
    }
    
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4));
    console.log("Finished! Re-mapped all items natively to pure .png structures.");
})();
