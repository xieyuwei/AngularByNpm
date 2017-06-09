const template = `
<div class="Coupon" ng-class="coupon.type|changeFirst">
<div class="Coupon__Container">
   <div class="Coupon__Logo">
      <img ng-src="{{coupon.logo}}" alt="">
    </div>
<div class="Coupon__Content">
  <div class="Coupon__Content--title">
    <h3 ng-bind="coupon.title"></h3>
    <button>领取卡券</button>
  </div>   
  <div ng-bind="coupon.content"></div>
</div>
  </div>
  </div>
`

export default {
  template,
  bindings: {
    coupon: '<'
  },
  controller: function ($scope) {
    $scope.coupon = this.coupon
  }
}