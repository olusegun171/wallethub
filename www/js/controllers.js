angular.module('WalletHub.controllers', [])

.factory('FactoryData', function() {
 
  var auth = {};
  return {
        getDataObj: function () {
            return auth;
        },
        setDataObj: function (DataObj) {
            auth = DataObj;
        }
    };
})

.controller("Task2Ctrl", function($scope, $stateParams, $state, FactoryData) {

  $scope.val2 = $stateParams.param2;
  $scope.fullname = FactoryData;
  
  $scope.Data = FactoryData.getDataObj();

})

.controller("Task7Ctrl", function($scope) {

  $scope.change = function() {
        $scope.num1 = "";
        $scope.num1 = $scope.total / 2;
        
      };

})

.controller("Task4Ctrl", function($scope){

  $scope.employees = [
  {"name": "Miranda","city": "Eckernförde","country": "Taiwan"},
  {"name": "Kellie","city": "Wals-Siezenheim","country": "Portugal"},
  {"name": "Inga","city": "Sandy","country": "Sweden"},
  {"name": "Sonia","city": "Frankston","country": "Svalbard and Jan Mayen Islands"},
  {"name": "Dante","city": "Minitonas","country": "El Salvador"},
  {"name": "Kendall","city": "Orp-le-Grand","country": "Guinea-Bissau"},
  {"name": "Blake","city": "Gambolò","country": "Saint Martin"},
  {"name": "Adrienne","city": "Ingelheim","country": "Cyprus"},
  {"name": "Zenaida","city": "Lourdes","country": "Greece"},
  {"name": "Hayley","city": "Słupsk","country": "Hungary"},
  {"name": "Winifred","city": "Monte San Giovanni in Sabina","country": "Benin"},
  {"name": "Kyle","city": "Allein","country": "Luxembourg"},
  {"name": "Darius","city": "Anzio","country": "Chad"},
  {"name": "Rudyard","city": "Carbonear","country": "Senegal"},
  {"name": "Eden","city": "Falkirk","country": "Bouvet Island"},
  {"name": "Xena","city": "Salon-de-Provence","country": "Iran"},
  {"name": "Chloe","city": "Roosendaal","country": "Yemen"},
  {"name": "Hannah","city": "Coalville","country": "Kyrgyzstan"},
  {"name": "Rajah","city": "Waitara","country": "Panama"},
  {"name": "Sylvester","city": "Ambattur","country": "Botswana"},
  {"name": "Ryan","city": "Sovizzo","country": "United Kingdom (Great Britain)"},
  {"name": "Violet","city": "Maubeuge","country": "Micronesia"},
  {"name": "Guy","city": "Boignee","country": "Estonia"},
  {"name": "Tara","city": "Calera","country": "Saint Vincent and The Grenadines"},
  {"name": "Yuri","city": "Tollembeek","country": "United Kingdom"},
  {"name": "McKenzie","city": "Orvault","country": "Mali"},
  {"name": "Merrill","city": "St. Austell","country": "Macedonia"},
  {"name": "Justin","city": "Barrhead","country": "Virgin Islands, United States"},
  {"name": "Norman","city": "Colobraro","country":"Gibraltar"},
  {"name": "Dexter","city": "Bowden","country": "Martinique"},
  {"name": "Owen","city": "Gaya","country": "San Marino"},
  {"name": "Evangeline","city": "Worcester","country": "Bonaire, Sint Eustatius and Saba"},
  {"name": "Jena","city": "Zoerle-Parwijs","country": "Maldives"},
  {"name": "Levi","city": "Lago Ranco","country": "Guatemala"},
  {"name": "Tanek","city": "Pittsburgh","country":"French Southern Territories"},
  {"name": "Halla","city": "Sint-Amandsberg","country": "Switzerland"},
  {"name": "Quyn","city": "Pemberton","country": "Thailand"},
  {"name": "Dustin","city": "Termini Imerese","country": "Austria"},
  {"name": "Ivy","city": "Francavilla in Sinni","country": "Barbados"},
  {"name": "Serena","city": "Huizingen","country": "Sint Maarten"},
  {"name": "Harrison","city": "Faizabad","country": "Cyprus"},
  {"name": "Colt","city": "Treppo Carnico","country": "South Georgia and The South Sandwich Islands"},
  {"name": "Wade","city": "Tiarno di Sopra","country": "Trinidad and Tobago"},
  {"name": "Signe","city": "Tuscaloosa","country": "United Kingdom"},
  {"name": "Giselle","city": "San Chirico Nuovo","country": "Andorra"},
  {"name": "Gary","city": "Buckie","country": "Burundi"},
  {"name": "Jonas","city": "Cape Breton Island","country": "Oman"},
  {"name": "Jelani","city": "Sluizen","country": "Saint Pierre and Miquelon"},
  {"name": "Vivian","city": "Parramatta","country": "Myanmar"},
  {"name": "Dorothy","city": "Castiglione a Casauria","country": "Andorra"}
]
})

.directive('myFocus', function() {
    function getCaretPosition(elem) {
      // Internet Explorer Caret Position
      if (document.selection && document.selection.createRange) {
        var range = document.selection.createRange();
        var bookmark = range.getBookmark();
        return bookmark.charCodeAt(2) - 2;
      }

      // Firefox Caret Position
      return elem.setSelectionRange && elem.selectionStart;
    }

    return {
      restrict: 'A',
      link: function(scope, elem, attr) {
        var tabindex = parseInt(attr.tabindex);
        var maxlength = parseInt(attr.maxlength);

        elem.on('input, keydown', function(e) {
          var val = elem.val(),
              cp, 
              code = e.which || e.keyCode;

          if (val.length === maxlength && [8, 37, 38, 39, 40, 46].indexOf(code) === -1) {
            var next = document.querySelectorAll('#input' + (tabindex + 1));
            next.length && next[0].focus();
            return;
          }

          cp = getCaretPosition(this);
          if ((cp === 0 && code === 46) || (cp === 1 && code === 8)) {
            var prev = document.querySelectorAll('#input' + (tabindex - 1));
            e.preventDefault();
            elem.val(val.substring(1));
            prev.length && prev[0].focus();
            return;
          }
        });
      }
    };
  })

  .directive('myCurrency', function(){
    return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, el, atts, ngModel) {
      /* called when model is changed from the input element */
      ngModel.$parsers.unshift(function(vValue) {
        
        var numbers = vValue.replace(/\D/g, ''),
            char = {0:'$',1:', ',3:''};
        numbers = numbers.slice(0,4);
        vValue = '';
        
        for (var i = 0; i < numbers.length; i++) {
            vValue += (char[i]||'') + numbers[i];
        }
        
        // set the input to formatted value
        el.val(vValue);
        
        return vValue;
      });

      /* called when model is changed outside of the input element */
      ngModel.$formatters.push(function(mValue) {
        return mValue; 
      });
      
      /* called when the model changes, if validation fails the model value won't be assigned */
      ngModel.$validators.phone = function(mValue, vValue) {
        if (mValue) {
          return mValue.match(/\d/g).length === 4; 
        } else {
          return false;
        }
      }
      
    }
  }
})

  .directive('phoneNumber', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, el, atts, ngModel) {
      
      /* called when model is changed from the input element */
      ngModel.$parsers.unshift(function(viewValue) {
        
        var numbers = viewValue.replace(/\D/g, ''),
            char = {0:'(',3:') ',6:' - '};
        numbers = numbers.slice(0, 10);
        viewValue = '';
        
        for (var i = 0; i < numbers.length; i++) {
            viewValue += (char[i]||'') + numbers[i];
        }
        
        // set the input to formatted value
        el.val(viewValue);
        
        return viewValue;
      });

      /* called when model is changed outside of the input element */
      ngModel.$formatters.push(function(modelValue) {
        return modelValue; 
      });
      
      /* called when the model changes, if validation fails the model value won't be assigned */
      ngModel.$validators.phone = function(modelValue, viewValue) {
        if (modelValue) {
          return modelValue.match(/\d/g).length === 10; 
        } else {
          return false;
        }
      }
      
    }
  }
})



.controller("PageCtrl", function($scope, $stateParams, $state, FactoryData) {

  $scope.val2 = $stateParams.param2;
  
  $scope.data = {};  
  $scope.$watch('data', function (newValue, oldValue) {
      if (newValue !== oldValue) FactoryData.setDataObj(newValue);
  }, true);  
});