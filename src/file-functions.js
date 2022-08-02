// call file system module (core library module)
const fs = require('fs');

// copy stylesheet to dist directory
const copyStyle = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'Stylesheet copied successfully!'
            });            
        });
    });
};

// write HTML file to dist directory
const writeHTML = importedHTML => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', importedHTML, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            };

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'HTML file created!'
            });
        });
    });
};

// export functions as a single object
module.exports = {copyStyle, writeHTML};