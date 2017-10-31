'use strict';

/* Directive for file Read */

(function(){
  angular.module('seoApp').directive('fileReader', function($ngConfirm) {
  return {
    scope: {
      fileReader:"="
    },
    link: function(scope, element) {
     
      $(element).on('change', function(changeEvent) {
        //console.log(changeEvent.target.files[0].name);
        var extn = changeEvent.target.files[0].name.split(".").pop();
       if(extn == 'txt'){
        var files = changeEvent.target.files;
        
        if (files.length) {
          var r = new FileReader();
          r.onload = function(e) {
              var contents = e.target.result;
              scope.$apply(function () {
                scope.fileReader = contents;
              });
          };
          r.readAsText(files[0]);
        }
      }else{
        angular.element("input[type='file']").val(null); // File Delete incase not txt files
        $ngConfirm('<div class="suc-ok"><b><span class="fa fa-exclamation-circle"></span>&nbsp; Error</b></div><br><br><span style="padding: 65px;"><b>Please Select TXT File Only</b></span>');
        //alert('Please select Txt File Only');
         //angular.element("input[type='file']").val(null); // File Delete incase not txt files
         /* dialog.confirm('Please Select TXT File Only!').then(function(){
            angular.element("input[type='file']").val(null);
           })*/
        
        
      }
      });
    }
  };
});
}());
/**/