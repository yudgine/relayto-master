export default class Fonts {
    constructor(AppConstants, $http, $q) {
      'ngInject';
  
      this._AppConstants = AppConstants;
      this._$http = $http;
      this._$q = $q;
  
  
    }
  

    get() {
      let deferred = this._$q.defer();
  
      this._$http({
        url: this._AppConstants.api + '?key=' + this._AppConstants.api_key,
        method: 'GET'
      }).then(
        (res) => deferred.resolve(res.data),
        (err) => deferred.reject(err)
      );
  
      return deferred.promise;
    }
    
  
  }
  