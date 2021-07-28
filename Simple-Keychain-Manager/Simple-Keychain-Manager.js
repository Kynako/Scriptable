/*!
 * Simple-Keychain-Manager.js
 * Copyright (c) 2021 Kynako
 * This software is released under the MIT License.
 * https://github.com/Kynako/Scriptable-Scripts/blob/main/Simple-Keychain-Manager/LICENSE
 */

class UI {
  constructor(){};
  
  static async getKeychain(){
    const alert = new Alert();
    alert.title = '- Get Keychain -';
    alert.message = 'Input key.';
    alert.addAction('Get');
    alert.addCancelAction('Cancel');
    alert.addTextField('key', null);
    const choice = await alert.present();
    if(choice === -1) return -1;
    const key = alert.textFieldValue(0);
    if(key === ''){
      const alert = new Alert();
      alert.title = 'The key is empty.';
      alert.addCancelAction('OK');
      await alert.present();
      return -1;
    };
    if(!Keychain.contains(key)){
      const alert = new Alert();
      alert.title = 'The key doesn’t exist in Keychain.';
      alert.addCancelAction('OK');
      await alert.present();
      return -1;
    };
  };
  
  static async setKeychain(){
    const alert = new Alert();
    alert.title = '- Set Keychain -';
    alert.message = 'Set key and value.';
    alert.addAction('Set');  // choice: 0
    alert.addCancelAction('Cancel'); // choice: -1
    alert.addTextField('key', null);
    alert.addTextField('value', null);
    const choice = await alert.present();
    if(choice === -1) return -1; // if canceled
    const key   = alert.textFieldValue(0),
          value = alert.textFieldValue(1);
    if([key, value].some(item => item === '')){
      const alert = new Alert();
      alert.title = 'The key or Value are empty.';
      alert.addCancelAction('OK');
      await alert.present();
      return -1;
    };
    if(Keychain.contains(key)){
      const alert = new Alert();
      alert.title = 'The key already exists in Keychain.';
      alert.addCancelAction('OK');
      const choice = await alert.present();
      if(choice === -1) return -1; // if OK
    };
    Keychain.set(key, value);
    return (async () => {
      const alert = new Alert();
      alert.title = 'Set the key and value.'
      alert.message = `key: \n${key}\n\nvalue: ${value}`;
      alert.addCancelAction('OK');
      await alert.present();
      return -1;
    })();
  };
  
  static async removeKeychain(){
    const alert = new Alert();
    alert.title = '- Remove Keychain -';
    alert.message = 'Input the key you want to remove.';
    alert.addDestructiveAction('Remove'); // choice: 0
    alert.addCancelAction('Cancel'); // choice: -1
    alert.addTextField('key', null);
    const choice = await alert.present();
    if(choice === -1) return -1; // if canceled
    const key = alert.textFieldValue(0);
    if(!Keychain.contains(key)){
      const alert = new Alert();
      alert.title = 'The key doesn’t exist in Keychain.';
      alert.message = `Check the key:\n'${key}'`;
      alert.addCancelAction('OK');
      await alert.present();
      return -1;
    } else {
      const alert = new Alert();
      alert.title = 'Are you sure tou want to remove the key?';
      alert.message = `Key: ${key}`
      alert.addDestructiveAction('Yes');
      alert.addCancelAction('Cancel');
      const choice = await alert.present();
      if(choice === -1) return -1;
      Keychain.remove(key);
      return (async ()=>{
        const alert = new Alert();
        alert.title = 'Removed.';
        alert.message = `Key: ${key}`;
        alert.addCancelAction('OK');
        await alert.present();
        return -1;
      })();
    };
  };
};

async function main(){
  const alert = new Alert();
  alert.title = '= Keychain Tool =';
  alert.addAction('Get');
  alert.addAction('Set');
  alert.addAction('Remove');
  alert.addCancelAction('End');

  const choice = await alert.present();
  switch(choice){
    case 0: return await UI.getKeychain(); break;
    case 1: return await UI.setKeychain(); break;
    case 2: return await UI.removeKeychain(); break;
   default: return -2; break; // ended
  };
};


while(true){
  const canceled = await main();
  if(canceled === -2) break;
};