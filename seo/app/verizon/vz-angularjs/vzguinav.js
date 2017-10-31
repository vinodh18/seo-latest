'use strict';

/**
 * @ngdoc directive
 * @name vztimeApp.directive:vzGuiGlobalHeader
 * @description
 * # vzGuiGlobalHeader
 */
angular.module('vzguiHeaderDirective')
  .directive('vzGuiNav', function () {
    return {
      restrict: 'C',
        templateUrl:'common/headerCustomizeMenu.html'
//        ,
//      link: function postLink(scope, element) {
//          
//      // homeMenuDropdown is mandatory, please do not modify.
//      var homeMenuDropdown = '<li class="dropdown hidden-xs hidden-sm vz-home-dropdown"><a href="#" id="vz-home-icon-link" class="vz-home-icon-link"><span><i class="fa fa-lg fa-home"></i></span><span class="vz-arrow-container"><i class="fa fa-lg fa-chevron-down vz-arrow-icon"></i></span></a><ul class="dropdown-menu vz-home-dropdown-menu"><li><ul class="vz-home-dropdown-list"><li class="vz-home-dropdown-content"><a href="https://vzweb2.verizon.com/">VZWeb</a></li><li class="vz-home-dropdown-content"><a href="https://aboutyou.verizon.com/">About You</a></li><li class="vz-home-dropdown-content"><a href="https://crowdaround.verizon.com/">CrowdAround</a></li></ul></li></ul></li><li class="vz-separator hidden-xs hidden-sm" >|</li>';
//      // customMenu - Custom menu links should be added/updated here
//      var customMenu = '<li class="vz-gui-dropdown vz-gui-dropdown-primary">\
//            <a href="#">1 column</a>\
//            <ul class="vz-gui-dropdown-menu fullwidth">\
//                <li class="vz-gui-dropdown-content withdesc">\
//                    <div class="vz-gui-row-eq-height">\
//                        <div class="col-sm-12">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                    </div>\
//                </li>\
//            </ul>\
//        </li>\
//        <!-- One Column Dropdown Menu End -->\
//        <!-- Two Column Dropdown Menu start -->\
//        <li class="vz-gui-dropdown vz-gui-dropdown-primary">\
//            <a href="#">2 Column</a>\
//            <ul class="vz-gui-dropdown-menu fullwidth">\
//                <li class="vz-gui-dropdown-content withdesc">\
//                    <div class="vz-gui-row-eq-height">\
//                        <div class="col-sm-6">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-6">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                    </div>\
//                </li>\
//            </ul>\
//        </li>\
//        <!-- Two Column Dropdown Menu End -->\
//        <!-- Three Column Dropdown Menu start -->\
//        <li class="vz-gui-dropdown vz-gui-dropdown-primary">\
//            <a href="#">3 Column</a>\
//            <ul class="vz-gui-dropdown-menu fullwidth">\
//                <li class="vz-gui-dropdown-content withdesc">\
//                    <div class="vz-gui-row-eq-height">\
//                        <div class="col-sm-4">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-4">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-4">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                    </div>\
//                </li>\
//            </ul>\
//        </li>\
//        <!-- Three Column Dropdown Menu End -->\
//        <!-- Four Column Dropdown Menu start -->\
//        <li class="vz-gui-dropdown vz-gui-dropdown-primary">\
//            <a href="#">4 Column</a>\
//            <ul class="vz-gui-dropdown-menu fullwidth">\
//                <li class="vz-gui-dropdown-content withdesc">\
//                    <div class="vz-gui-row-eq-height">\
//                        <div class="col-sm-3">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-3">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-3">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-3">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                    </div>\
//                </li>\
//            </ul>\
//        </li>\
//        <!-- Four Column Dropdown Menu End -->\
//        <!-- Five Column Dropdown Menu start -->\
//        <li class="vz-gui-dropdown vz-gui-dropdown-primary">\
//            <a href="#">5 Column</a>\
//            <ul class="vz-gui-dropdown-menu fullwidth">\
//                <li class="vz-gui-dropdown-content withdesc">\
//                    <div class="vz-gui-row-eq-height">\
//                        <div class="col-sm-15">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-15">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-15">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-15">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-15">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                    </div>\
//                </li>\
//            </ul>\
//        </li>\
//        <!-- Five Column Dropdown Menu End -->\
//        <!-- Six Column Dropdown Menu start -->\
//        <li class="vz-gui-dropdown vz-gui-dropdown-primary">\
//            <a href="#">6 Column</a>\
//            <ul class="vz-gui-dropdown-menu fullwidth">\
//                <li class="vz-gui-dropdown-content withdesc">\
//                    <div class="vz-gui-row-eq-height">\
//                        <div class="col-sm-2">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-2">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-2">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-2">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-2">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                        <div class="col-sm-2">\
//                            <ul class="vz-gui-sub-dropdown">\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                                <li><a href="#">Sub Link</a></li>\
//                            </ul>\
//                        </div>\
//                    </div>\
//                </li>\
//            </ul>\
//        </li><!-- Six Column Dropdown Menu End -->';
//      element.empty();
//      element.append(homeMenuDropdown);
//      element.append(customMenu);
//      document.getElementsByTagName('body')[0].className += " vzbs-gui-customized";
//          console.log("sdfsd")
//      }
    };
  });