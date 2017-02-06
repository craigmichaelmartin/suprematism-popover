#!/usr/bin/env node

/* global process */

const glob = require('glob'),
    fs = require('fs-extra'),
    chalk = require('chalk'),
    sass = require('node-sass'),
    exec = require('child_process').exec,
    nodeSassGlobbing = require('node-sass-globbing'),
    moment = require('moment'),

    /** Build script options */
    htmlFilePathPattern = 'src/**/*.html',
    cssFilePathPattern = 'src/**/*.scss',
    jsFilePathPattern = 'dist/**/*.js',
    outputFolderPath = 'dist',
    // includePaths = 'app/',
    srcPath = 'src';

init();

/**Public */
/**
 * Initialize build process
 */
function init() {
    fs.emptyDir(outputFolderPath, function (err) {
        if (err) {
            _notification(err);
        } else {
            _copyHTMLCSSFiles();
            _buildTSFiles();
        }
    });
}

/** Private */
/**
 * Build typescript files
 */
function _buildTSFiles(option = '-p src') {
    _notification(`Compiling typescript files`);
    exec(`./node_modules/typescript/bin/tsc --moduleResolution 'Node' ${option}`, (error, stdout, stderr) => {
        if (error) {
            throw new Error(stdout);
        }
        _notification(`Successfully created javascript files`);
        glob(jsFilePathPattern, _handleUpdateJSFiles());
    });
}
/**
 * Copies html, build css & copy css from src to dist
 */
function _copyHTMLCSSFiles() {
    const destFile = (file) => `${outputFolderPath}${file.replace('src', '')}`;
    /**
     * Copies html, build css & copy css files from src to dist
     * @param {string} htmlFilePathPattern - File Matching Pattern
     * @param {function} _handleGlob - Handles the result
     */
    glob(htmlFilePathPattern, _handleGlob('HTML', destFile));
    glob(cssFilePathPattern, _renderSCSS('SCSS', destFile));

}

/**
 * Generate SCSS files
 * @param {string} type - The type of files being copied
 * @param {function} createFile - A function for creating the dist file
 * @return {function}
 */
function _renderSCSS(type, createFile) {
    /**
     * @param  file - the main scss file to render from (like the root)
     * @param  includePaths - let it know where to look for @imports
     * @param  outFile - the file to output
     * @param  importer - a plugin to handle file glob paths in the scss files
     * @param  handleRender - handles the result
     */
    return (error, files) => {
        if (error) {
            throw new Error(error);
        }
        _notification(`Compiling scss Files`);
        for (let file of files) {
            sass.render({
                file: file,
                importer: nodeSassGlobbing,
                outputStyle: 'compressed',
                outFile: createFile(file),
                sourceMap: true
            }, _handleSCSSRender.bind(null, createFile(file)));
        }
    };
}

/**
 * Handle glob callback
 * @param {string} type - The type of files being copied
 * @param {function} createFile - A function for creating the dist file
 * @return {function}
 */
function _handleGlob(type, createFile) {
    /**
     * Callback function for Glob
     * @param {Error | null} error
     * @param {string[]} filenames found matching the pattern
     */
    return (error, files) => {
        _notification(`Copying ${type} Files`);
        if (error) {
            throw new Error(error);
        }

        for (let file of files) {
            let destFile = createFile(file);
            let copySyncError = fs.copySync(file, destFile, { clobber: true });
            _writeFileHandler(destFile, copySyncError);
        }
    };
}

/**
 * Handle the render call
 * @param err - the error from the render method
 * @param result - an object with all the data
 */
function _handleSCSSRender(scssOutputFile, error, result) {
    scssOutputFile = scssOutputFile.replace('scss', 'css');

    if (error) {
        throw new Error(error);
    }

    fs.ensureFile(scssOutputFile, (ensureFileError) => {
        if (ensureFileError) {
            throw new Error(error);
        }

        fs.writeFile(scssOutputFile,
            result.css,
            _writeFileHandler(scssOutputFile)
        );
    });
}

/**
 * updates index file for production.
 * @param {string} file - File to update
 */
function _handleUpdateJSFiles() {

    /**
 * Callback function for Glob
 * @param {Error | null} error
 * @param {string[]} filenames found matching the pattern
 */
    return (error, files) => {
        if (error) {
            throw new Error(error);
        }

        for (let file of files) {
            _updateFile({
                file: file,
                changes: [
                    {
                        oldString: /[.]scss/g,
                        newString: '.css'
                    }
                ]
            })
        }
    };
}

/**
 * Modify a file contents
 * @param {object}
 * @param {string} file - The file modify
 * @param {object[]} changes - Requested chagnes
 */
function _updateFile({file, changes}) {
    /**
     * Extract the contents of the systemjs.config.js file
     * @type {string} fileContents
     */
    let fileContents = fs.readFileSync(file, 'utf8');
    /**
     * Loop through the changes and update file
     */
    changes.forEach((change) => {
        fileContents = fileContents.replace(change.oldString, change.newString);
    });
    // Update file with changes
    fs.writeFile(file, fileContents, (error) => {
        if (error) {
            throw new Error(error);
        }
        _writeFileHandler(file)
    });

}

/**
 * Handles the write error, if there is one
 * @param filePath the path that the file was written to
 * @return {Function} - that handles the write file callback
 */
function _writeFileHandler(filePath, error) {

    if (error && error !== null) {
        console.log(chalk.red('error writing the file'), error);
    } else {
        console.log(chalk.gray(filePath) + chalk.green(' created successfully at ' + moment(Date.now()).format('h:mm:ss a')));
    }

}

/**
 * Utility function for displaying console notification
 * @param {string} message - The message to display
 */
function _notification(message) {
    console.log('\n' + chalk.bold.white(message));
}