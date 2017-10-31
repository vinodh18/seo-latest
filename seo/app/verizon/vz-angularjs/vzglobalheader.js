'use strict';

/**
 * @ngdoc directive
 * @name vztimeApp.directive:vzguiHeaderDirective
 * @description
 * # vzguiHeaderDirective
 */
 angular.module('vzguiHeaderDirective',[]);
angular.module('vzguiHeaderDirective')
  .directive('vzguiHeader', function ($compile,$timeout) {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {
      	//VZGLOBALUIClientCustomizer.userProfileImageUrl = scope.$parent.employeeProfile.currentEmployeeProfile.imgSrc;
        var vzGuiPoll;
		var vzGuiTimeout = 5; // 5 seconds timeout
		var vzGuiScript = document.createElement('script');
		vzGuiScript.type = 'text/javascript';
		vzGuiScript.src =  'https://globalui.verizon.com/header/globaluiBase';
		document.body.appendChild(vzGuiScript);
		var isGlobaluiLoaded = false;
		vzGuiPoll = function () {
                    console.log("HELLO2")
			setTimeout(function () {
				vzGuiTimeout--;
				if (typeof VZGLOBALUILoaded !== 'undefined' && element.parent().children().html() !== '') {
                    console.log("HELLO1")
					$compile(angular.element(element.parent().children()[0]))(scope);
					isGlobaluiLoaded = true;
				}
				else if (!isGlobaluiLoaded && vzGuiTimeout > 0) {
                    console.log("HELLO2");
					vzGuiPoll();
				}
				else if (!isGlobaluiLoaded && vzGuiTimeout === 0) {
                    console.log("HELLO3")
					var dupGlobalHeader = document.getElementsByClassName('vz-gui-global-header-server');
					if(dupGlobalHeader[0]===undefined){
                    console.log("HELLO4")
						document.body.removeChild(vzGuiScript);
						var vzGuiScriptLocal = document.createElement('script');
						vzGuiScriptLocal.type = 'text/javascript';
                        vzGuiScriptLocal.src = '../externalLibraries/vz-angularjs/globalui.js';
						document.body.appendChild(vzGuiScriptLocal);
						$timeout(function(){
							$compile(angular.element(element.parent().children()[0]))(scope);
						},2000);
					}

				}
			}, 1000);
		};

		vzGuiPoll();
      }
    };
  });
