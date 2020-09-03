const path = require('path');
const fs = window.require('fs');

class FileController {
  constructor(props) {
    const documentPath = (window.require("electron").app || window.require("electron").remote.app).getPath('documents') + '\\DungeonManager';

    if (!fs.existsSync(documentPath)) {
      fs.mkdirSync(documentPath);
    }

    this.path = path.join(documentPath, props.configName + '.json');

    this.data = parseDataFile(this.path, props.defaults);

    this.set(props.defaults.key, props.defaults.val);
  }

  get(key) {
    return this.data[key];
  }

  set(key, val) {
    this.data[key] = val;
    fs.writeFileSync(this.path, JSON.stringify(this.data));
  }
}

function parseDataFile(filePath, defaults) {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch (error) {
    return defaults;
  }
}

module.exports = FileController;