const STORAGE_KEY = couponStore
export default {
  fetch(){
    const items = window.sessionStorage.getItem(STORAGE_KEY)
    return JSON.parse(items)||[]
  },
  save(items){
    window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
