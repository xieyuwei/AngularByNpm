import angular from 'angular'
import app from './components/app.component'
import appHeader from './components/header.component'
import coupon from './components/coupon.component'
import couponList from './components/couponList.component'

angular.module('app', [])
  .filter("changeFirst",function(){
    return function(str){　　　　　　　
      var arr = str.split(" ");　　
      arr = arr.map(function (ele) {　　
        if(ele&&ele[0].charCodeAt()>=97&&ele[0].charCodeAt()<=122){　　　　
          ele = ele[0].toUpperCase()+ele.substring(1);
        }
        return ele;
      });
      return arr.join(" ");　　　
    }
  })
  .controller('MyCtrl', function($rootScope) {
    console.log('1111')
    $rootScope.a = '11111'
  })
  .component('app', app)
  .component('appHeader', appHeader)
  .component('coupon', coupon)
  .component('couponList', couponList)

export default 'app'
