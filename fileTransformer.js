const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    return 'module.export = ' + JSON.stringify(path.basename(filename)) + ';';
  }
}