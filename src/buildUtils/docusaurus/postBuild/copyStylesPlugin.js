const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

async function copyStyles(sourceDir) {
    const destDir = path.resolve(process.cwd(), '.storybook/assets/styles');
    const targetFile = 'docusaurus_global.css';
    const isLocalEnv = !process.env.CI;

    fs.existsSync(destDir) || fs.mkdirSync(destDir, { recursive: true });

    const cssFiles = fs.readdirSync(sourceDir).filter(file => file.endsWith('.css'));

    if(cssFiles.length === 0) {
        console.error('No CSS file found in build/assets/css')
    } else { 
        const sourceFile = path.resolve(sourceDir,cssFiles[0] )
        const destFile = path.resolve(destDir, targetFile);

        const cssContent = fs.readFileSync(sourceFile, 'utf-8');

        const formatted = isLocalEnv
            ? await prettier.format(cssContent, { parser: 'css'})
            : cssContent;

        fs.writeFileSync(destFile, formatted);
        
        console.log(`Copied and renamed ${cssFiles[0]} to ${targetFile}`)
    }
}

module.exports = function(context, options) {
    return {
        name: 'post-build-copy-styles',
        postBuild: async ({ outDir }) => {
            await copyStyles(path.resolve(outDir, 'assets/css'))
        }
    }
}