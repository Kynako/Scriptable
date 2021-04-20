// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-green; icon-glyph: book-open;
/*!
 * Qiitable.js v0.0.0
 *
 * Copyright (c) 2021 Kynako
 *
 * This software is released under the MIT license.
 * See https://github.com/Kynako/Scriptable/blob/main/Qiitable/LICENSE
*/

class Qiitable {
  constructor(access_token){
    this.AT = access_token || null;
    this.base_url = "https://qiita.com";
  };
    
  async loadJSON(method, endpoint, param){
    if(method.match(/^get$/i)){
      const url = param == undefined
        ? this.base_url + endpoint
        : this.base_url + endpoint + this._buildQueryString(param);
      const r = new Request(url);
      r.method = method.toUpperCase();
      r.headers = {"Authorization": "Bearer " + this.AT};
      return {
        json: await r.loadJSON(),
        response: r.response
      };
    } else if(method.match(/^(post|patch|delete)$/i)){
      const url = this.base_url + endpoint;
      const r = new Request(url);
      r.method = method.toUpperCase();
      r.headers = {"Authorization": "Bearer " + this.AT};
      r.body = param;
      return {
        json: await r.loadJSON(),
        response: r.response
      };
    } else {
      throw new Error("The {method} is unsupported. It should be 'GET', 'POST', 'PATCH' or 'DELETE'.");
    };
  };
  
  _buildQueryString(param){
    if(param != undefined){
      return "?" + Object.keys(param).sort().map((k)=>{
        return `${k}=${encodeURIComponent(param[k])}`;
      }).join("&")
    } else return ""
  };
};

module.exports = Qiitable;