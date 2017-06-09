const controller = function ($rootScope, $scope) {
  $scope.logo = "../../../images/LOGO.png"

  $scope.switchLang = function(lang) {
    $rootScope.language = lang || 'zh'
  }
}

const template = `<div class="Logo">
  <img ng-src="{{logo}}" alt="">

  <div class="Language__Switch">
  <span ng-click="switchLang('zh')">中文</span> | <span ng-click="switchLang('en')">ENG</span>
  </div>
  </div>`

export default {
  template,
  controller
}