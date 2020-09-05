const electron = require('electron');
const path = require('path');
const fs = require('fs');
const dialog = require('electron')

console.log(dialog)

var save = document.getElementById('save');


save.addEventListener('click', (event) => {
    // Resolves to a Promise<Object>
    dialog.showSaveDialog({
        title: 'Select the File Path to save',
        defaultPath: path.join(__dirname, './sample.txt'),
        buttonLabel: 'Save',
        // Restricting the user to only Text Files.
        filters: [
            {
                name: 'Text Files',
                extensions: ['txt', 'docx']
            }, ],
        properties: []
    }).then(file => {
        // Stating whether dialog operation was cancelled or not.
        console.log(file.canceled);
        if (!file.canceled) {
            console.log(file.filePath.toString());
            // Creating and Writing to the sample.txt file
            fs.writeFile(file.filePath.toString(),
                         'This is a Sample File', function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }
    }).catch(err => {
        console.log(err)
    });
});
