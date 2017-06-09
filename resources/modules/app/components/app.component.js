const controller = function($rootScope) {
  $rootScope.language='zh'
}

export default {
  template: `<div>
      <app-header></app-header>
      <coupon-list></coupon-list>
    </div>`,
  controller
}