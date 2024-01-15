# Pokemon PWA

## Dependencies
* [**_MUI_**](https://mui.com/material-ui/getting-started/installation/)
* [**_Axios_**](https://www.npmjs.com/package/axios)

## Steps to create PWA
### Changes in index.html
1. Put desired image path
2. Put path for **manifest.json**
3. Add script tag to register serviceWorker (Note: Take care of the path for **serviceWorker.js**)

### Changes in offline.html
1. Copy entire **offline.html** code

### Changes in manifest.json
1. Put short_name, name & icon path

### Changes in serviceWorker.js
1. Copy the entire file, then make sure the paths for **index.html**, **offline.html** are correct