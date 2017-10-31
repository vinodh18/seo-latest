/***********************************************
 *******
 *******    Enterprise Header Service
 *******
 ***********************************************/
 
    /*
     * @function injectFile
     * @description: Funtion to inject css/js resource files
     */

    var injectFile = function(filename, filetype,tagName){
        if (filetype=="js"){ //if filename is a external JavaScript file
            var fileref=document.createElement('script')
            fileref.setAttribute("type","text/javascript")
            fileref.setAttribute("src", filename)
        }
        else if(filetype="css"){
            var fileref=document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
        }
        if(fileref != undefined)        
            document.getElementsByTagName(tagName)[0].appendChild(fileref);
    }

    var VZGLOBALUILoaded = true;
    
    // Inject CSS/JS resource files
    injectFile("../externalLibraries/vz-angularjs/styles/globaluiStyles.css", "css","head");
    injectFile("../externalLibraries/vz-angularjs/globaluiMain.js", "js","head");
    injectFile("../externalLibraries/vz-angularjs/quotes.js", "js","head");
    injectFile("../externalLibraries/vz-angularjs/todos.js", "js","head");
