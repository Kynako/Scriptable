/*!
 * iTunesSearchAPI.js
 * Copyright (c) 2021 Kynako
 * This software is released under the MIT License.
 * https://github.com/Kynako/Scriptable/blob/main/LICENSE
 *
 */

class iTunesSearchAPI {
  static async lookup(param){
    const url = 'https://itunes.apple.com/lookup'
              + this._buildQueryString(param);
    const r = new Request(url);
    return r.loadJSON();
  };
  
  static search(param){
    const url = 'https://itunes.apple.com/search'
              + this._buildQueryString(param);
    const r = new Request(url);
    return r.loadJSON();
  };
    
  static _buildQueryString(param){
    return '?' + Object.keys(param).map((k)=>{
      return `${k}=${encodeURIComponent(param[k])}`;
   }).join('&');
  }; 
};

module.exports = iTunesSearchAPI;