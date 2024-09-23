const fs = require('fs');
const path = require('path');

// The folder to index
const directory = path.join(__dirname, 'static');

// Generate the HTML index
const generateIndex = (dir, baseUrl = '/') => {
  let html = '<html><body><h1>Index of /static</h1><ul>';

  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const fileUrl = path.join(baseUrl, file);

    if (fs.statSync(filePath).isDirectory()) {
      html += `<li><a href="${fileUrl}/index.html">${file}/</a></li>`;
      // Recursively generate index for subdirectories
      generateIndex(filePath, fileUrl);
    } else {
      html += `<li><a href="${fileUrl}">${file}</a></li>`;
    }
  });

  html += '</ul></body></html>';
  return html;
};

// Write the index file
const htmlIndex = generateIndex(directory);
fs.writeFileSync(path.join(directory, 'index.html'), htmlIndex);

console.log('Index file generated at /static/index.html');