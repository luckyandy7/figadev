const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3845;

const mimeTypes = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif'
};

// Map asset hashes to actual image files
const assetMap = {
  // UI Images
  '7d2b631eeb3a47c7e652c66caa3cce34573b8752.png': 'icon.png',
  '36b2310e5a9e698948d722560338e812ac85b065.png': 'section2.png',
  'f58a600a07df7e3952b7a3eef3ffd5231fade9f1.png': 'section5.png',
  '6a696e545560bf4a21da9d3ee02a31bf9db84285.png': 'section5.png',

  // Gallery Images
  'fac0fd8f72c12a4eddbfdb17ddbb092a4328d23e.png': '197937fa-fb9c-46ec-9501-78795206aa58_650.jpg',
  '231845f7403af461bc78ff1e30ac55544ef7cdef.png': '20f5711b-b61e-411c-acf0-99c0921ec9a9_650.jpg',
  'ebd18795380d30c198bb1a962830c68d7d49a523.png': '6f620988-4c69-41a0-a9e2-7a1dca7cebb1_650.jpg',
  'e1f7acda3f4fdaf527b3238e817c0c605a849dea.png': '75b087fd-df9b-47b1-827e-7cb36d5703ec_650.jpg',
  '3715d9d40d8bd8a6e372ecdceb3f00bf7e24808d.png': '7634883_YiY5IqT601.jpg',
  '26b756f877388309ad41d5f2239a42c0d6a930e6.png': 'c3eaa544-8727-4891-8580-272968b749b8_650.jpg',
  'd5d76ec732389b7f493778d509df094aee81c9ee.png': 'ca2c99f3-e49c-47ee-8791-8f3e21775fdc_650.jpg',
  '14c1f908dfa9ac4c9b97aa32f53b920da30e152d.png': 'dff013db-1785-4cd2-8347-3cd7da910618_650.jpg',
  'c0ad74c4d12737aa32937ef68be5e2ba0edb039a.png': 'f841a441-4988-4fbc-bd4d-0cdf601a67cb_650.jpg',

  // Feature Images
  '20b259770072a5d4f9336491acbdf86047d94ee1.png': 'aiobjet.png',
  '7a90fc7e3359192a5659ca28daf4ee499efc26fb.png': 'dashboard.png',
  '76a91cfa836273cc8aeb73c70d089a1ceb7e68be.png': 'mutimodel.png',
  'cf2c71c139c0a6987282c0399e0c6be3c613d196.png': 'feedback.png',
  '1cf8daf37fc80e385dee9744ac7cf8d0ac6db418.png': 'cognitive fusion ai.png',
  'b646c7df2af9f523684869f422aaf04c990f3851.png': 'multi sensory.png',

  // Hardware Images
  '60e934276eb69e71e18b53ec71ab38a4b7af0147.png': 'muse.png',
  '94c819b331a665b7800d84e5a8a6afd9b122bc91.png': 'multiplatform.png',

  // Process Step Images
  '94f36b86ad936a5e1dd86e1d2e58d64ee0e33c89.png': '10 1.png',
  '14ad3b0b6b5a6ad13b66bb7593b9b7b5fc5f48c6.png': '10 2.png',
  'a9b0e7e0bcdf5e2b9b61c6fcdd073e4b3d57d33f.png': '10 3.png',

  // Background Images
  '575cb526e4f8325777b6fcee5dbacd645d3ff7e4.png': 'section 9 1.png',
  '323ae1579ef194afd571c091c6823f45bcd5af24.png': 'section 9 2.png',
  'd80c63c32e42d3ddd4c8d90dd39edf791ba52144.png': 'last.png',
  '13150231aefba85ad241c1e597c1a3df986c51d6.png': 'ai objet 2.png'
};

const server = http.createServer((req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Parse URL to get file path
  const urlPath = req.url;
  console.log('Request for:', urlPath);

  if (urlPath.startsWith('/assets/')) {
    // Extract the hash from the URL
    const assetHash = path.basename(urlPath);
    const mappedFile = assetMap[assetHash];

    if (mappedFile) {
      const imagePath = path.join(__dirname, 'image', mappedFile);

      if (fs.existsSync(imagePath)) {
        const ext = path.extname(mappedFile).toLowerCase();
        const mimeType = mimeTypes[ext] || 'application/octet-stream';
        res.setHeader('Content-Type', mimeType);
        fs.createReadStream(imagePath).pipe(res);
        return;
      }
    }

    // Fallback to default image
    const fallbackPath = path.join(__dirname, 'image', 'icon.png');
    if (fs.existsSync(fallbackPath)) {
      res.setHeader('Content-Type', 'image/png');
      fs.createReadStream(fallbackPath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Image not found');
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Asset server running on http://localhost:${PORT}`);
});