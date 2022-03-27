# Patika.dev React dersi - Ödev 1

Projede axios ile https://jsonplaceholder.typicode.com sitesinden kullanıcı bilgisi ve postları çekildi.

Ancak import ve export işlemleri değişmiş olduğundan, patika.dev sitesinde anlatıldığı gibi değil, aşağıda anlattığım şekilde yapıldı.

myModule.js dosyasından getData fonksiyonu 
* module.exports = getData;

şeklinde export edildi.

import işlemleri de 
* const axios = require('axios');
* const getData = require('./myModule');

şekillerinde yapıldı.

Githuba yüklerken node_modules klasörü yüklenmedi. İçinde axios var. Projeyi pull ettikten sonra "npm install" derseniz node_modules klasörünü ve içine axios'u kuracaktır.
