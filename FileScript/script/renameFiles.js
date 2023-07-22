const fs = require('fs');
const path = require('path');

function bulkRenameFiles(pathdir, newName) {
  try {
    const files = fs.readdirSync(pathdir);

    files.forEach((file) => {
      const oldFilePath = path.join(pathdir, file);
      const newFileName = newName.replace('{filename}', file);
      const newFilePath = path.join(pathdir, newFileName);

      fs.renameSync(oldFilePath, newFilePath);
      console.log(`Renamed ${file} to ${newFileName}`);
    });
  } catch (error) {
    console.error('Error renaming files:', error);
  }
}

bulkRenameFiles('C:/Users/91636/Desktop/BackendProjs/FileScript/test', 'changed');
