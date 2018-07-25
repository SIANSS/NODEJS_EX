var imgmgr = require('gm');
imgmgr('vision.jpg').resize(500, 250).autoOrient().write(response, error => {});
