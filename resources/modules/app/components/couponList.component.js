const coupons = {
  "zh": [
    {
      "id": 1,
      "card_id": "pPjPHwC5D9s4npcZHZU9nV3sGRnI",
      "title": "澳门银河澳门悦榕Spa",
      "content": "精美礼品一份",
      "type": "spa",
      "logo": "../../images/SPA_LOGO.png"
    },
    {
      "id": 2,
      "card_id": "pPjPHwLaOZQdIUbQTxqO3RGCjUiQ",
      "title": "澳门银河怡世宝水疗",
      "content": "30分钟免费肩背按摩",
      "type": "spa",
      "logo": "../../images/ESPA_LOGO.png"
    },
    {
      "id": 3,
      "card_id": "pPjPHwMosHtQkDYNCbceBNHedUvU",
      "title": "澳门银河「丽思咖啡厅」",
      "content": "法式下午茶买三送一",
      "type": "fb",
      "logo": "../../images/CAFE_LOGO.png"
    },
    {
      "id": 4,
      "card_id": "pPjPHwDCkysfPz7_WVlUF8LkVsE0",
      "title": "澳门银河丽思酒廊",
      "content": "享下午茶送鸡尾酒",
      "type": "fb",
      "logo": "../../images/BAR_LOGO.png"
    },
    {
      "id": 5,
      "card_id": "pPjPHwAbbDinNNT6ABzP7BWCt0uA",
      "title": "澳门银河悠然自足",
      "content": "8折享任何按摩疗程",
      "type": "spa",
      "logo": "../../images/FOOT_HUB_LOGO.png"
    }
  ],
  "en": [
    {
      "id": 1,
      "card_id": "pPjPHwOHjtqx85YAdLt85eAj7jtg",
      "title": "Banyan Tree Spa Macau",
      "content": "A Special FREE Gift For You",
      "type": "spa",
      "logo": "../../images/SPA_LOGO.png"
    },
    {
      "id": 2,
      "card_id": "pPjPHwGx9aRKmN_GV9aHdM8nsnqA",
      "title": "ESPA Macau",
      "content": "FREE 30-Min Upgrade of Shoulder Massage",
      "type": "spa",
      "logo": "../../images/ESPA_LOGO.png"
    },
    {
      "id": 3,
      "card_id": "pPjPHwHc_RF3bV9bLBXMW-iRwA54",
      "title": "The Ritz-Carlton Café",
      "content": "Buy 3 Get 1 FREE French Tea Set",
      "type": "fb",
      "logo": "../../images/CAFE_LOGO.png"
    },
    {
      "id": 4,
      "card_id": "pPjPHwP5VwRXYMUimy5bvhtC-y-o",
      "title": "The Ritz-Carlton Macau",
      "content": "Buy Tea Set Get FREE Cocktail",
      "type": "fb",
      "logo": "../../images/BAR_LOGO.png"
    },
    {
      "id": 5,
      "card_id": "pPjPHwA5zXEWvhdQ9NqkZifDLjV0",
      "title": "Foot Hub",
      "content": "20% OFF Any Massage Treatment",
      "type": "spa",
      "logo": "../../images/FOOT_HUB_LOGO.png"
    }
  ]
}

const controller = function ($rootScope, $scope, $timeout) {
  this.coupons = []

  function getCouponsByLanguage(lang) {
    let language = lang || $rootScope.language;
    console.log('coupons', coupons[language])
    return coupons[language];
  }

  $rootScope.$watch('language', (newVal, oldVal) => {
    this.coupons = getCouponsByLanguage(newVal)
  })
}

const template = `
<div class="Coupon__List">
  <coupon ng-repeat="coupon in vm.coupons" coupon="coupon"></coupon>
</div>
`

export default {
  template,
  controller,
  controllerAs: 'vm'
}