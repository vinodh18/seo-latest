'use strict';

var myApp = angular.module('seoApp').controller('MainCtrl', 
    function ($scope, $http, $filter, $timeout, $uibModal, $log, dialog, $ngConfirm, $rootScope) {
    /*this.awesomeThings = ['HTML5 Boilerplate','AngularJS','Karma', '' ];*/
    var Url = 'http://192.168.1.105:8763/seo/';

    /* Specific Url Get Method */
    $scope.dates2 = { 
    	startDate: moment('2013-09-20'), endDate: moment('2013-09-25') };
		$scope.dates3 = { startDate: moment(), endDate: moment().add(1, 'day') };
		$scope.dates4 = { startDate: moment().subtract(1, 'day'), endDate: moment().subtract(1, 'day') };
		$scope.ranges = {
			'Today': [moment(), moment()],
			'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
			'Last 7 days': [moment().subtract('days', 7), moment()],
			'Last 30 days': [moment().subtract('days', 30), moment()],
			'This month': [moment().startOf('month'), moment().endOf('month')]
		};
   
    $scope.order = function(dateAscDsc) 
        {
          $scope.reverse = ($scope.dateAscDsc === dateAscDsc) ? !$scope.reverse : false;
          $scope.dateAscDsc = dateAscDsc;
        };
      
      $scope.pagelmt = [5, 10, 25, 50]
       $scope.currentPage = 1;
       $scope.pageSize = 5;
        /*Pagination*/
        $scope.pageChangeHandler = function(num) {
          console.log('going to page ' + num);
      };
    
    /*$scope.initUrl = function(){
      $http.post(Url + 'dashboard/getDashboard').then(function(data){
      if(data){
        $scope.url_data = data.data.dashboard;
        $scope.Urltotal  = $scope.url_data.length;
       }
      })
    }*/


      /* Model PopUp Window */

    $scope.changeProducts = function(size, index, crawDate) {
      console.log('popup window index', index);
        var tmplUrl;
        switch(index){
         case 0: 
         tmplUrl = '/seo/app/views/tabs/models/keyword_model_ahead.html';
         break;
         case 1:
         tmplUrl = '/seo/app/views/tabs/models/keyword_model_popup.html';
         break;
         case 2:
         tmplUrl = '/seo/app/views/tabs/models/keyword_model_newcomp.html';
         break;
         case 3:
         tmplUrl = '/seo/app/views/tabs/models/keyword_model_behined.html';
         break;
         /*case 1:
         tmplUrl = "partials/modals/dashboardModal/harshAcceleration.jsp";
         break;
         case 2:  
         tmplUrl = "partials/modals/dashboardModal/harshBreakingAlerts.jsp";
         break;
         case 3:  
         tmplUrl = "partials/modals/dashboardModal/sharpTurnAlerts.jsp";
         break;
         default:  
         tmplUrl = "partials/modals/dashboardModal/speedingAlerts.jsp";*/
         
         }

        var modalInstance = $uibModal.open({
            templateUrl: tmplUrl, //'/seo/app/views/tabs/keyword_model.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                user: function() {
                    return crawDate;
                },
                selectedProducts: function() {
                    return crawDate.selectedProducts;
                },
                products: function () {
                    //console.log($scope.selectedProducts);
                    return $scope.products; // get all available products
                }
            }
        });
        
        modalInstance.result.then(function (selectedItems) {
            //products = selectedItems;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };


    /*Model PopUp End*/


   /* Crawling Data Get Method */
      
     /*  $scope.initCrawling = function(){
        $http.post(Url + "crawl/getAllCrawlData").then(function(data){
		    $scope.cradata = data.data.Crawl_Data;
        $scope.total = $scope.cradata.length;
        })
    	}*/
      
      /* Keyword Analysis Get Method */
        
       $scope.initKeyword = function(){
        var ahead = [];
        $scope.file = {};
        $scope.competitor = [];
        $scope.index = 0;
        $http.post('../app/json/keyword.json').then(function(data){
        /*$http.post(Url + "analyizeKeyword/getLastAnalysisDtls").then(function(data){*/
         $scope.keydata = data.data.Seo_AnalysisReport;
       
        //console.log("$scope.keydata[0].urlSerp[i]",ahead.length)
       
        var srp;
       // console.log('$scope.keydata', $scope.keydata[0].urlSerp[0].Urlcode == 'vz');
        
        if($scope.keydata[0].urlSerp[0].urlCode == 'vz'){
            srp = $scope.keydata[0].urlSerp[0].serp;
          }

        $scope.keysrp = srp;
        console.log('$scope.keysrp', $scope.keysrp)
        $scope.keyTot =  $scope.keydata.length;
        $scope.page = 1;
        })

        
        /*Create Row*/
         $scope.addNew = function(){
            $scope.competitor.push({});
            $scope.index++;
          };
         $scope.remove = function(index){
          dialog.confirm('Confirm! Are you sure you want to delete ?').then(function(){
            $scope.competitor.splice(index, 1);
           })
         } 
        $scope.addNew();
      }

      /*keyWord Tab*/
      $scope.keywordtabs = function(data){
       var ana_id = data.analysisId;
       var key_data = $http.post(Url + 'analyizeKeyword/getAnalysisReport?analysisId=' + ana_id).then(function(data){
        $scope.keydata = data.data.Seo_AnalysisReport;
       })
      }

      /*File Upload */
     
      $scope.initRunAanlysis = function(file){
        var x = isValidString(file);
        $scope.loader = true;      
       
        if(file.length > 1){
        if(x ==true){
          $scope.file = file;
          
         var key = $http.post(Url + "analyizeKeyword/uploadListofKeywords?users="+ $scope.file).then(function(data){
          $scope.loader = false;
          $scope.keydata = data.data.KeywordAnalysisDetails;
          console.log('after submit acction $scope.keydata', $scope.keydata);
         })
          }else{
            $ngConfirm('<div class="suc-ok"><b><span class="fa fa-exclamation-circle"></span>&nbsp; Error</b></div><br>' +
          '<br><span style="padding: 36px;"><b>Symbols are not Allowed<br><span style="margin-left: 38px;">Please Check File and Try Again</span></b></span>');
          }
          }
       }

       /* ExcelSheet Download */
        

        $scope.exportToExcel = function(){
         $scope.exportCsvFile = [];
         var temp = {keydata: $scope.keydata.url}
         var x = {url: temp.url};
         var url, srp, keyword;
            angular.forEach($scope.keydata, function(value, key){
               var keyword = value.keyword;
                /*var url = _.pluck(value.urlSerp, 'url');
                var serp = _.pluck(value.urlSerp, 'serp');
                $scope.exportCsvFile.push({"keyword": keyword, url: url, "serp":serp });*/
                $scope.exportCsvFile.push({"keyword": keyword});
                angular.forEach(value.urlSerp, function(data, no){
                  url = data.url;
                  srp = data.serp;
                  $scope.exportCsvFile.push({url: url, serp: srp});
                })

             })
              
            var exportOptions = {
                headers:true,
                
                columns: [  
                  {columnid:'keyword', title: 'KEYWORD', width: '300px', style:'background:#96C6CC;border: solid;'},
                  {columnid:'url', title: 'URL', width: '800px', style:'background:#96C6CC;border: solid;'},
                  {columnid:'serp', title: 'SERP', width: '200px', style:'background:#96C6CC;border: solid;'}
                ]
              }
         
        alasql('SELECT * INTO XLS("Analysis_Report.xls",?) FROM ?',[exportOptions, $scope.exportCsvFile]);
        };

       /*Excelsheet Download End*/

       /*Date Rage Selected Records*/
        $scope.analysis = {};
       $scope.initDateAna = function(){
        $scope.loader = true;
        
         /*Analysis Service for Date Range */
        
        /*var dataRange = $http.post(Url + 'analyizeKeyword/getAnalysisList?fromDate=' + $scope.analysis.startdate+ '&toDate=' + $scope.analysis.enddate).then(function(data){
          $scope.daterangeana = data.data.Seo_AnalysisList;
          console.log("$scope.date range..", $scope.daterangeana)
        })*/
        var dataRange = $http.post(Url + 'analyizeKeyword/getAnalysisList?fromDate=' + $scope.analysis.startdate+ '&toDate=' + $scope.analysis.enddate).then(function(data){
          $scope.loader = false;
          
          $scope.daterangeana = data.data.Seo_AnalysisList;
        })
       }

       /* Check File Upload symbolls condition */

        function isValidString(str){
         return !/[~`!#$%\^&*+=\-\[\]\\';/{}|\\":<>\?]/g.test(str);
        }

        


       /* Search using Custom Filter */

         $scope.searchfilter = function (craw) {
         
          if ($scope.searchUrl === undefined || $scope.searchUrl.length === 0) {
              return true;
          }

          var found = false;
          angular.forEach(craw.urlSerp, function (urlSerp) {  
              if (urlSerp.url === parseInt($scope.searchUrl)) {

                  found = true;
              }
          });
          return found;
        };


        /*$scope.greaterThan = function(prop, val){
            return function(item){
              return item[prop] > val;
            }
        }*/

      /* Reports Functions */
      /* Crete Rule */

    $scope.initAddRule = function() {
        
        $scope.item = {};
        $scope.rule = {};
        $scope.rule.reportObject = [];
        $scope.index = 0;
        $scope.rule.urlIds = '';
       
       /*Get Rules Function*/
       /*$scope.getRule = function(){
        var rules = $http.get('http://192.168.2.37:8073/seo/reports/getRule').then(function(data){
          $scope.rules = data;
        }
       }*/
       
       /*get Rules Function*/
       $scope.getRules = function(){
        $http.get('http://192.168.2.37:8073/seo/reports/getRule').then(function(data){
          $scope.rule = data.data.Seo_Report_Rule;
        })
       }
      /*Add Row for Reports Page click add button */

       /* $scope.addNew = function(){
            $scope.rule.reportObject.push({});
            $scope.index++;
        };*/

        /*Slice Row for Reports Page click add button */
        /*$scope.remove =  function(index){
           dialog.confirm('Confirm! Are you sure you want to delete ?').then(function(){
            
            $scope.rule.reportObject.splice(index, 1);
           })
          
        }*/
     
      $scope.initCreateRule = function(){
        if($scope.item.name == true){
            $scope.item.url = 'All';
          }
        
      
      $scope.rule.urlIds = $scope.item.url;
       
       var baseRule = $http.post('http://192.168.2.37:8073/seo/reports/saveRule', $scope.rule)
       .then(function(data){
        console.log("data..", data);
        if(data.status == 200){
         alert("success created");
        }
        
       });

      }
       $scope.addNew();
       $scope.getRules();
    }

  
     

     /*View Reports  And Trends Html page Add Function */

     $scope.reports = function(){
        window.location = "views/tabs/reports_and_trends_view.html";
      }

      /*HItting Service */
      /*$scope.initKeyword = function(){
        $http.post(Url + "analyizeKeyword/getKeywordAnalysis").then(function(data){
        $scope.keydata = (data.data.KeywordAnalysisDetails);
        $scope.page = 1;
      })
      }*/
    	/* Competation Ranking Spline Chart */

    /*	$scope.chart =function(){
    		$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
			  $scope.series = ['Verizon', 'iPad', 'iPod Touch'];
			  $scope.data = [
			    [65, 59, 80, 81, 56, 55, 40],
			    [28, 48, 40, 19, 86, 27, 90],
			    [2, 38, 45, 29, 56, 29, 60]
			  ];
			  $scope.onClick = function (points, evt) {
			    console.log(points, evt);
			  };
			  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
			  $scope.options = {
			    scales: {
			      yAxes: [
			        {
			          id: 'y-axis-1',
			          type: 'linear',
			          display: true,
			          position: 'left'
			        }
			      ]
			    }
			  };
    	}*/
      /*Create Dirsctive */
 }).directive('serpDetails', function($rootScope) {

 return {
        restrict: 'E', //E = element, A = attribute, C = class, M = comment         
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            //limit: '@',
            objVal:'@',
            caseVal: '@'   
        },
        templateUrl: '../app/views/directives/serpDetails.html',
        link: function ($scope, element, attrs) { 
          if(attrs.caseVal == 'ahead'){
            $scope.ahead = attrs.caseVal;
          }else if(attrs.caseVal== 'behind'){
            $scope.behind = attrs.caseVal
          }else if(attrs.caseVal== 'newComp'){
            $scope.newComp = attrs.caseVal;
          }

          var filtervz = _.where(angular.fromJson(attrs.objVal).urlSerp, {urlCode: 'vz'});
          var limitCount = parseInt(filtervz[0].serp);
          var filternvz = _.where(angular.fromJson(attrs.objVal).urlSerp, {urlCode: 'nvz'});
          
          var filternvzaheadCount = _.filter(filternvz, function(item){
            if(limitCount > 0){
            return item.serp < limitCount;
            }else {
              return item.serp > limitCount;
            }
          });
          
          var filternvzbehinedCount = _.filter(filternvz, function(item){
            if(limitCount > 0){
              return item.serp > limitCount;
            }else{
              return item.serp < limitCount;
            }
          });
          
          var filternewCompCount = _.filter(filternvz, function(item){
            return item.newCompetitor == 1;
          });
          
          $scope.aheadnvz = filternvzaheadCount.length;
          $scope.behinednvz = filternvzbehinedCount.length;
          $scope.NewCompe = filternewCompCount.length;
          /*Store root scope values for display no records*/

          $rootScope.ahd = $scope.aheadnvz;
          $rootScope.bhd = $scope.behinednvz;
          $rootScope.ncp = $scope.NewCompe;

          //console.log($scope.behinednvz);
          //console.log('filtervzfiltervz', filtervz[0].serp);
          //console.log('filtervzfilternvz', filternvz);

          $scope.seDetails = angular.fromJson(attrs.objVal);
          //$scope.lmt = attrs.limit;

         } //DOM manipulation
    }
});


/**/

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
    console.log('going to page ' + num);
  };
}

myApp.controller('OtherController', OtherController);



/*Model PopUp Controller*/


myApp.controller('ModalInstanceCtrl', function ($scope, $http, $uibModalInstance, products, selectedProducts, user) {
  $scope.users = user;
  $scope.key = $scope.users.keyword;

  for(var i=0; i<$scope.users.urlSerp.length; i++){
   if($scope.users.urlSerp[i].urlCode == 'vz'){
    $scope.vzurl = $scope.users.urlSerp[i].url;
    $scope.position = parseInt($scope.users.urlSerp[i].serp);

    }
  }
  $scope.selected = selectedProducts;
  

  $scope.chkChange = function(item) {
      console.log(item);
      var index  = $scope.selected.indexOf(item);
      if (index > -1) {
          $scope.selected.splice(index, 1);
      }
      else {
          // not selected --> we have to add it
          $scope.selected.push(item);
      }
      console.log($scope.selected);
  };
  //console.log(selectedProducts);
  $scope.ok = function () {
      // prepare everything for sending to sever
      // --> probably check here if the data have changed or not (not implemented yet)
      
      console.log('new selection', $scope.selected);
      var data = $.param({
            json: JSON.stringify({
                user: user.name,
                products: $scope.selected
            })
        });
      
      $http.post('/echo/json/', data)
          .success(function(data, status) {
              console.log('posted the following data:', data);
          });
      
      $modalInstance.close();//); $scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  /* Competation Ranking Spline Chart */

      $scope.chart =function(){
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['iPad', 'iPod Touch', 'Verizon'];
        $scope.data = [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90],
          [2, 38, 45, 29, 56, 29, 60]
        ];

        /*$scope.onClick = function (points, evt) {
        
        };*/
        $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }];
        $scope.options = {
          scales: {
            yAxes: [
              {
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'left'
              }
            ]
          }
        };
          console.log("$scope.colors", $scope.options);
      }


});


