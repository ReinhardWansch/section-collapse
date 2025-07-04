// const fs = require('fs');
// const path = require('path');
import fs from 'fs';
import path from 'path';


// Read the current package.json to get the new version
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const newVersion = packageJson.version;

// Path to manifest.json
const manifestPath = path.join('src', 'manifest.json');

// Read and update manifest.json
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
manifest.version = newVersion;

// Write the updated manifest back to file
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

console.log(`Updated manifest.json version to ${newVersion}`);