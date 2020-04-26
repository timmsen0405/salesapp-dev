if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

var $$ = Dom7;

var app = new Framework7({
  root: '#app', // App root element


  name: 'Sales App', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data() {
    return {
      foo: 'bar'
    };
  },
  // App root methods
  methods: {
    doSomething() {
      //...
    }
  },


  // App routes
  routes: routes,
});

// TEST DATA //////////////////////////////////////////////////////////////////////////////
// User Data for development & testing Only ////////////////////
var userData = [
  {
    username: 'LSKYWALKER',
    password: 'NOOOOO!',
    surname: 'Luke',
    lastname: 'Skywalker',
    zvpartner: 'SR933102',
    vkorg: '0093',
    vtw: '01',
    spart: '30',
    vkbur: 'DE31',
    vkgrp: 'D01',
  },
  {
    username: 'ADENT',
    password: '42',
    surname: 'Arthur',
    lastname: 'Dent',
    zvpartner: 'SR933301',
    vkorg: '0093',
    vtw: '01',
    spart: '30',
    vkbur: 'DE33',
    vkgrp: 'D07',
  }];
////////////////////////////////////////////////////////////////

// Sales related master data /////////////////////////////////////////
var vkorg = [
  { value: '0020', name: 'HD Cement AG' },
  { value: '0081', name: 'HD Sand & Kies GmbH' },
  { value: '0093', name: 'HD Beton GmbH' }
];

var vtw = [
  { value: '01', name: 'Standard' },
];

var spart = [
  { value: '10', name: 'Zement' },
  { value: '30', name: 'Beton' },
  { value: '40', name: 'Zuschlagstoffe' },
  { value: '99', name: 'Sonstige' },
];

var vkbur = [
  { value: 'DE31', name: 'Region Nord-Ost' },
  { value: 'DE32', name: 'Region Nord-West' },
  { value: 'DE33', name: 'Region Süd-West' },
  { value: 'DE34', name: 'Sonstige' },
  { value: 'DE35', name: 'Region Süd' },
];

var vkgrp = [
  { value: 'D01', name: 'Berlin-Brandenburg' },
  { value: 'D02', name: 'Sachsen-Thüringen' },
  { value: 'D03', name: 'Hamburg-Bremen' },
  { value: 'D04', name: 'Westfalen-Niedersachsen' },
  { value: 'D05', name: 'Rhein-Ruhr' },
  { value: 'D06', name: 'Rhein-Main' },
  { value: 'D07', name: 'Rhein-Nahe-Haardt' },
  { value: 'D08', name: 'Kurpfalz' },
  { value: 'D09', name: 'Stuttgart' },
];

var zbed = [
  { value: 'ZBAR', name: 'Barzahlung' },
  { value: 'N008', name: '8 Tage netto' },
  { value: 'N014', name: '14 Tage netto' },
  { value: 'N021', name: '21 Tage netto' },
  { value: 'N030', name: '30 Tage netto' },
  { value: 'D001', name: 'Sofort 1 % Skonto' },
  { value: 'D002', name: 'Sofort 2 % Skonto' },
  { value: 'D003', name: 'Sofort 3 % Skonto' },
  { value: 'D081', name: '8 Tage 1 % Skonto' },
  { value: 'D141', name: '14 Tage 1 % Skonto' },
  { value: 'S801', name: '8 Tage/2%, 14 Tage/netto' },
  { value: 'S805', name: '8 Tage/3%, 14 Tage/netto' },
  { value: 'S804', name: '8 Tage/2%, 21 Tage/netto' },
  { value: 'S819', name: '8 Tage/3%, 21 Tage/netto  ' },
  { value: 'S800', name: '8 Tage/2%, 30 Tage/netto' },
  { value: 'S808', name: '8 Tage/3%, 30 Tage/netto' },
  { value: 'S144', name: '14 Tage/2%, 21 Tage/netto' },
  { value: 'S147', name: '14 Tage/3%, 21 Tage/netto' },
  { value: 'S140', name: '14 Tage/2%, 30 Tage/netto' },
  { value: 'S148', name: '14 Tage/3%, 30 Tage/netto' },
];

var konda = [
  { value: 'K1', name: 'Skonto v. Warenwert' },
  { value: 'K2', name: 'Skonto v. Rechnungsendbetrag' },
];

var gpsbehave = [
  { value: '1', name: 'Update geocodes on EACH delivery' },
  { value: '2', name: 'Update geocodes on the FIRST delivery' },
]

var brsch = [
  { value: 'DE00', name: 'BU Hochbau klein' },
  { value: 'DE01', name: 'BU Hochbau mittel' },
  { value: 'DE02', name: 'BU Hochbau groß' },
  { value: 'DE03', name: 'Bau AG / Konzern' },
  { value: 'DE04', name: 'Tiefbauunternehmen' },
  { value: 'DE05', name: 'Spezialtiefbau' },
  { value: 'DE06', name: 'Bauherr Industrie' },
  { value: 'DE07', name: 'Bauherr privat' },
  { value: 'DE08', name: 'Bauherr öffentlich' },
  { value: 'DE09', name: 'Archtitekturbüro' },
  { value: 'DE10', name: 'Ingenieurbüro' },
  { value: 'DE11', name: 'Industriebodenbauer' },
  { value: 'DE12', name: 'Estrichleger' },
  { value: 'DE13', name: 'Galabauer' },
  { value: 'DE14', name: 'Landwirt' },
  { value: 'DE15', name: 'Baustoffhandel' },
  { value: 'DE16', name: 'RMC-Hersteller' },
  { value: 'DE17', name: 'Spediteure' },
  { value: 'DE99', name: 'Sonstige' },
];

var bran1 = [
  { value: 'DE00', name: 'BU Hochbau klein' },
  { value: 'DE01', name: 'BU Hochbau mittel' },
  { value: 'DE02', name: 'BU Hochbau groß' },
  { value: 'DE03', name: 'Bau AG / Konzern' },
  { value: 'DE04', name: 'Tiefbauunternehmen' },
  { value: 'DE05', name: 'Spezialtiefbau' },
  { value: 'DE06', name: 'Bauherr Industrie' },
  { value: 'DE07', name: 'Bauherr privat' },
  { value: 'DE08', name: 'Bauherr öffentlich' },
  { value: 'DE09', name: 'Archtitekturbüro' },
  { value: 'DE10', name: 'Ingenieurbüro' },
  { value: 'DE11', name: 'Industriebodenbauer' },
  { value: 'DE12', name: 'Estrichleger' },
  { value: 'DE13', name: 'Galabauer' },
  { value: 'DE14', name: 'Landwirt' },
  { value: 'DE15', name: 'Baustoffhandel' },
  { value: 'DE16', name: 'RMC-Hersteller' },
  { value: 'DE17', name: 'Spediteure' },
  { value: 'DE99', name: 'Sonstige' },
];

var kukla = [
  { value: 'a1', name: 'A1-Kunde' },
  { value: 'a2', name: 'A2-Kunde' },
  { value: 'a3', name: 'A3-Kunde' },
  { value: 'b1', name: 'B1-Kunde' },
  { value: 'b2', name: 'B2-Kunde' },
  { value: 'b3', name: 'B3-Kunde' },
  { value: 'c1', name: 'C1-Kunde' },
  { value: 'c2', name: 'C2-Kunde' },
  { value: 'c3', name: 'C3-Kunde' },
];

var cstrength = [
  { value: 'C8/10', name: 'C8/10' },
  { value: 'C10/12', name: 'C10/12' },
  { value: 'C12/15', name: 'C12/15' },
  { value: 'C20/25', name: 'C20/25' },
  { value: 'C25/30', name: 'C25/30' },
  { value: 'C30/35', name: 'C30/35' },
  { value: 'C35/45', name: 'C35/45' },
  { value: 'C45/55', name: 'C45/55' },
  { value: 'C50/60', name: 'C50/60' },
];
var consistency = [
  { value: 'F1', name: 'F1' },
  { value: 'F2', name: 'F2' },
  { value: 'F3', name: 'F3' },
  { value: 'F4', name: 'F4' },
  { value: 'F5', name: 'F5' },
  { value: 'F6', name: 'F6' },
];

var grsize = [
  { value: '2', name: '2' },
  { value: '4', name: '4' },
  { value: '8', name: '8' },
  { value: '16', name: '16' },
  { value: '32', name: '32' },
  { value: '64', name: '64' },
];

var strdev = [
  { value: 'CEM I', name: 'CEM I' },
  { value: 'CEM II', name: 'CEM II' },
  { value: 'CEM III', name: 'CEM III' },
];

var expclass_X0 = [
  { value: 'X0', name: 'X0' },
];

var expclass_XC = [
  { value: 'XC1', name: 'XC1' },
  { value: 'XC2', name: 'XC2' },
  { value: 'XC3', name: 'XC3' },
  { value: 'XC4', name: 'XC4' },
];

var expclass_XD = [
  { value: 'XD1', name: 'XD1' },
  { value: 'XD2', name: 'XD2' },
  { value: 'XD3', name: 'XD3' },
];

var expclass_XS = [
  { value: 'XS1', name: 'XS1' },
  { value: 'XS2', name: 'XS2' },
  { value: 'XS3', name: 'XS3' },
];

var expclass_XF = [
  { value: 'XF1', name: 'XF1' },
  { value: 'XF2', name: 'XF2' },
  { value: 'XF3', name: 'XF3' },
  { value: 'XF4', name: 'XF4' },
];

var expclass_XA = [
  { value: 'XA1', name: 'XA1' },
  { value: 'XA2', name: 'XA2' },
  { value: 'XA3', name: 'XA3' },
];

var expclass_XM = [
  { value: 'XM1', name: 'XM1' },
  { value: 'XM2', name: 'XM2' },
  { value: 'XM3', name: 'XM3' },
];

var salesCustomizing = [
  { field: 'vkorg', values: vkorg },
  { field: 'vtw', values: vtw },
  { field: 'spart', values: spart },
  { field: 'vkbur', values: vkbur },
  { field: 'vkgrp', values: vkgrp },
  { field: 'zbed', values: zbed },
  { field: 'konda', values: konda },
  { field: 'brsch', values: brsch },
  { field: 'bran1', values: bran1 },
  { field: 'kukla', values: kukla },
  { field: 'gpsbehave', values: gpsbehave },
]

var materialCustomizing = [
  { field: 'cstrength', values: cstrength },
  { field: 'consistency', values: consistency },
  { field: 'grsize', values: grsize },
  { field: 'strdev', values: strdev },
  { field: 'expclass_X0', values: expclass_X0 },
  { field: 'expclass_XC', values: expclass_XC },
  { field: 'expclass_XD', values: expclass_XD },
  { field: 'expclass_XS', values: expclass_XS },
  { field: 'expclass_XF', values: expclass_XF },
  { field: 'expclass_XA', values: expclass_XA },
  { field: 'expclass_XM', values: expclass_XM },
];

//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////

// SERVICE WORKER RELATED ///////////////////////////////////////////////////////////////

// Notification API////////////////////////////////////////
if (!checkNotificationCompatibility) {
  alert("Unfortunately your browser does not support notifications.");
} else {
  requestNotifyPermit();
};

// 1. Step: Check Notification API compatibility
function checkNotificationCompatibility() {
  if (!('Notification' in window && navigator.serviceWorker)) {
    return false;
  } else {
    return true;
  }
};

// 2. Step: Request permission for notifiying user
function requestNotifyPermit() {
  Notification.requestPermission(function (status) {
    console.log('Notification permission status:', status);
  });
};

// 3. Step: Display Notifications
function displayNotification() {
  if (Notification.permission == 'granted') {
    /* Always check for user's permission */
    navigator.serviceWorker.getRegistration().then(function (reg) {
      var options = {
        body: 'Here is a notification body!',
        icon: './assets/icons/512x512.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        },
        actions: [
          {
            action: 'explore', title: 'Explore this new world'
          },
          {
            action: 'close', title: 'Close notification'
          },
        ]
      };
      reg.showNotification('Hello world!', options);
    });
  } else if (Notification.permission === "blocked") {
    /* the user has previously denied push. Can't reprompt. */
  } else {
    /* show a prompt to the user */
    requestNotifyPermit();
  };

};
////////////////////////////////////////////////////////////////////////////

// PUSH API/////////////////////////////////////////////////////////////////
// Check for push service subscription
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(function (reg) {
    console.log('Service Worker Registered!', reg);

    reg.pushManager.getSubscription().then(function (sub) {
      if (sub === null) {
        // Update UI to ask user to register for Push
        console.log('Not subscribed to push service!');
      } else {
        // We have a subscription, update the database
        console.log('Subscription object: ', sub);
      }
    });
  })
    .catch(function (err) {
      console.log('Service Worker registration failed: ', err);
    });
}

// Subscribe to push service
function subscribeUser() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (reg) {

      reg.pushManager.subscribe({
        userVisibleOnly: true
      }).then(function (sub) {
        console.log('Endpoint URL: ', sub.endpoint);
      }).catch(function (e) {
        if (Notification.permission === 'denied') {
          console.warn('Permission for notifications was denied');
        } else {
          console.error('Unable to subscribe to push', e);
        }
      });
    })
  }
}
///////////////////////////////////////////////////////////////////////////


///END Service worker related////////////////////////////////////////////////////////////


// SEND FORM DATA ///////////////////////////////////////////////////////////////////
// Send data to backend
function sendData(data, url) {
  console.log('SEND DATA:', data);
  // TO DO: Sending to backend
};
// Check if all fields are filled
function checkFields(form) {
  var data = app.form.convertToData(form);
  var objKeys = Object.keys(data);
  var objVals = Object.values(data);
  var emptyFields = false;

  for (var i = 0; i < objKeys.length; i++) {
    if (objVals[i] === "") {
      var li = document.createElement('li');
      $$(li).html('Field ' + objKeys[i] + ' is empty.');
      $$('ul.emptyFields').append(li);
      emptyFields = true;
    };
  };
  return emptyFields;
  ;
};
////////////////////////////////////////////////////////////////////////////////////


// OTHER FUNCTIONALITIES//////////////////////////////////////////////////////////
// Auto-fill fields from user data
function autoFill(form) {
  var data = app.form.getFormData('user-data');
  app.form.fillFromData(form, data);
};

// Enable: Store & Edit stored data, e.g. User Data
function editData(formId) {
  var formInputs = $$('#' + formId).find('input, select');
  formInputs.prop('disabled', true);
  $$('.tg-edit').on('click', function () {
    if ($$(this).hasClass('convert-form-to-data')) {
      var data = app.form.convertToData('#' + formId);
      app.form.storeFormData(formId, data);
      console.log('STORED DATA:', app.form.getFormData(formId));
      $$(this).removeClass('convert-form-to-data').html('Edit');
      formInputs.prop('disabled', true);
    } else {
      $$(this).addClass('convert-form-to-data').html('Done');
      formInputs.prop('disabled', false);
    };
  });
};

// Add options to select fields of distinct page / popup
function addOptionsToSelect(el, data) {
  var selectFields = $$(el).find('select');
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < selectFields.length; j++) {
      if (data[i].field === selectFields[j].name) {
        var opts = data[i].values;
        for (var k = 0; k < opts.length; k++) {
          var opt = document.createElement('option');
          $$(opt).html(opts[k].name);
          $$(opt).val(opts[k].value);
          $$(selectFields[j]).append(opt);
        };
      };
    };
  };
};

// Open Login-Screen when opening the app
/* Login functionality */
var loginScreen = app.loginScreen.open('#login-screen');
$$('#sign-in').on('click', function (e) {
  // for local development & testing pnly - will be replaced with backend operations, presumably WebAuthn
  var cred = app.form.convertToData('#login');
  var user = findUser(cred.username);
  if (!user) {
    app.dialog.alert('User and / or password wrong.', 'Login failed');
  } else {
    if (!checkPw(cred.password, user.password)) {
      app.dialog.alert('User and / or password wrong.', 'Login failed');
    } else {
      app.form.storeFormData('user-data', user);
      $$(document).find('form#login').find('input').val('');
      $$(document).find('.panel-open').removeClass('disabled');
      console.log('Login successful.');
      app.loginScreen.close();
    }
  }
});

function findUser(username) {
  var found = userData.find(x => x.username === username) || false;
  return found;
};

function checkPw(pwCred, pwUser) {
  var match = pwCred === pwUser;
  return match;
};

// Logout and empty user data storage
$$(document).on('panel:open', '.panel-right', function (e) {
  $$('a#logout').on('click', function (e) {
    logout();
  });
});

function logout() {
  app.form.removeFormData('user-data');
  $$(document).find('.panel-open').addClass('disabled');
  console.log('User logged out.');
};
/////////////////////////////////////////////////////////////////////////////////


///// CUSTOM PAGE CODE //////////////////////////////////////////////////////////

// Index (home) page////////////////////////////////////
addOptionsToSelect('#user-profile', salesCustomizing);

$$('#notify-test').on('click', function (e) {
  console.log('CLICKED: TEST NOTIFICATION')
  displayNotification();
});
///////////////////////////////////////////////

// Custom Code for "user-profile" page
$$(document).on('popup:open', function (e) {
  if ($$(this).find('.popup.modal-in').attr('id') === 'user-profile') {
    autoFill('#user-data')
    //Make User Data editable & storeable
    editData('user-data');
  };
});


// Custom Code for Quotation Cockpit
$$(document).on('page:beforein', '.page[data-name="form-quot"]', function (e) {
  // Code when page with data-name="form-quot" attribute loaded and initialized
  console.log('Quotation Cockpit opened.');

  // TESTING & DEVELOPMENT ONLY ///////////
  var testMaterials = new Array();
  testMaterials[0] = { // for development testing
    matNoInt: "116993",
    matNoExt: "1.6342.101",
    matArt: "FERT",
    matName: "C25/30 F4 8mm XC4, XM3 mittlerer Zement",
    cstrength: "C25/30",
    consistency: "F4",
    grsize: "8",
    expclass: ["XC4", "XM3"],
    strdev: "CEM II",
    uom: "M3"
  };
  testMaterials[1] = { // for development testing
    matNoInt: "116825",
    matNoExt: "1.5332.100",
    matArt: "FERT",
    matName: "C20/25 F3 16mm XC4, XM3, XA1 schneller Zement",
    cstrength: "C20/25",
    consistency: "F3",
    grsize: "16",
    expclass: ["XC4", "XA1", "XM3"],
    strdev: "CEM III",
    uom: "M3"
  };
  testMaterials[2] = { // for development testing
    matNoInt: "60795171",
    matNoExt: "",
    matArt: "DIEN",
    matName: "Wartezeit",
    cstrength: "",
    consistency: "",
    grsize: "",
    expclass: "",
    strdev: "",
    uom: "M3"
  };
  testMaterials[3] = { // for development testing
    matNoInt: "60762261",
    matNoExt: "",
    matArt: "DIEN",
    matName: "Belastung Rückbeton",
    cstrength: "",
    consistency: "",
    grsize: "",
    expclass: "",
    strdev: "",
    uom: "M3"
  };

  /////////////////////////////////////////
  addOptionsToSelect($$(this), salesCustomizing);
  addOptionsToSelect($$(this), materialCustomizing);

  // Auto-fill fields from user data
  autoFill('#partners-sales');

  var cart = new Array();
  var popup = app.popup.create();
  var customizeSearch;
  var customizeCart;

  // EVENT-HANDLER / LISTENER
  $$('.delPos').on('click', function (e) {//Delete Button functionality
    var checkedLines = $$(this).parents('.card').find('tbody').find('input[type="checkbox"]:checked').parents('tr');
    for (var i = 0; i < cart.length; i++) {
      var item = cart.find(element => element.matNoInt === checkedLines[i].id);
      var foundId = cart.findIndex(element => element.matNoInt === item.matNoInt);
      if (foundId > -1) {
        cart.splice(foundId, 1);
      };
    };
    checkedLines.remove();
    $$(this).parents('.card').find('thead').find('input[type="checkbox"]').prop({
      indeterminate: false,
      checked: false
    });
    console.log('Checked positions have been deleted.');
    console.log('Cart:', cart);
  });

  app.on('tabShow', function (tabEl) { // Action on swiping tabs
    var elem = tabEl;
    customizeCart = customizeCartBuild($$(elem).find('.data-table').attr('id'));
    buildCart($$(elem).find('.data-table').attr('id'), customizeCart);

    //Code for "send tab"
    if (elem.id === "tab-4") {
      var data = app.form.convertToData('#partners-sales');

      if (!checkFields('#partners-sales')) {
        $$(elem).find('a.send').addClass('button-fill').on('click', function (e) {
          var quotData = [data, cart];
          sendData(quotData);
        });
      };
    };
  });

  app.on('tabHide', function (tabEl) { // Action on swiping tabs
    var elem = tabEl;
    $$(elem).find('input[type="checkbox"]').prop({
      indeterminate: false,
      checked: false
    });

    if (elem.id === "tab-4") {
      $$(elem).find('ul.emptyFields').empty();
      $$(elem).find('a.send').removeClass('button-fill').off('click')
    };
  });

  $$('.searchBtn').on('click', function () { // Search Button Functionality
    var formId = $$(this).parents('form').attr('id');
    var formData = app.form.convertToData('#' + formId);
    var searchRes = getMaterial(customizeSearch[0], formData);
    buildSearchRes(searchRes, customizeSearch[1], $$(this));
  });

  app.on('popupOpen', function (popup) { // Actions on popup open
    var elem = popup.el;
    if ($$(elem).hasClass('searchMask')) {
      customizeSearch = customizeSearchMask(elem.id);
      var matArt = customizeSearch[0];
      var showProp = customizeSearch[1];
      console.log('SearchMask #' + elem.id, 'opened. CUSTOMIZING ', customizeSearch);

      if ($$(elem).hasClass('autoSearch')) {
        var searchRes = getMaterial(customizeSearch[0], [{}]);
        buildSearchRes(searchRes, showProp, elem);
      };
    };
  });

  app.on('popupClose', function (popup) { // Actions on popup close
    var elem = popup.el;
    if ($$(elem).hasClass('searchMask')) {
      $$(elem).find('tbody.search-results').empty();
      customizeCart = customizeCartBuild($$('div.tab-active').find('.data-table').attr('id'));
      buildCart($$('div.tab-active').find('.data-table').attr('id'), customizeCart);
      $$(elem).find('form.search-crit').find('input, select').val('false');
    };
  });

  function customizeSearchMask(id) { // Customizing for different search masks
    var matArt;
    var showProp = new Array();
    switch (id) {
      case 'prodSearch': // Product Search Customizing
        matArt = "FERT";
        showProp = ['cstrength', 'consistency', 'grsize', 'expclass', 'strdev'];
        break;
      case 'serviceSearch': // Service Search Customizing        
        matArt = "DIEN";
        showProp = ['matName', 'uom'];

        var searchbar = app.searchbar.create({ // create searchbar
          el: '.searchbar',
          searchContainer: '.search-content-list',
          searchItem: 'tr',
          searchIn: '.matName',
          on: {
            search(sb, query, previousQuery) {
              console.log(query, previousQuery);
            }
          }
        });
        break;
      default:
        startProp = 0;
    };
    return [matArt, showProp];
  };

  function buildSearchRes(searchRes, showProp, el) { // Build up data table with search results

    var dTbody;
    if ($$(el).hasClass('popup')) { // search result build-up on pop-up open
      dTbody = $$(el).find('tbody.search-results')
    } else if ($$(el).hasClass('searchBtn')) { // search result build-up by manual trigger
      dTbody = $$(el).parents('.page-content').find('tbody.search-results');
    };
    dTbody.empty();
    for (var i = 0; i < searchRes.length; i++) {
      var obj = searchRes[i];
      var objLength = Object.keys(obj).length;
      var objKeys = Object.keys(obj);
      var objVals = Object.values(obj);

      var tr = $$(document.createElement('tr')).attr('id', obj.matNoInt);
      dTbody.append(tr);

      for (var j = 0; j < objLength; j++) {
        for (var k = 0; k < objLength; k++) {
          if (objKeys[j] === showProp[k]) {
            var td = $$(document.createElement('td')).addClass('label-cell').html(objVals[j]);
            td.addClass(objKeys[j]);
            tr.append(td);
          };
        };
      };

      var icn = $$(document.createElement('i')).addClass('f7-icons').html('cart_badge_plus');
      var btn = $$(document.createElement('a')).addClass('link add').append(icn);
      var td = $$(document.createElement('td')).addClass('label-cell').append(btn);
      tr.append(td);

      btn.on('click', function (e) {
        cartBttns(this, searchRes);
        console.log('Cart:', cart);
      });

      //change cartbutton, if material is already in cart
      if (checkCart(obj)) {
        $$(btn).removeClass('add');
        $$(btn).find('i').html('cart_fill_badge_minus');
      };
    };
    console.log('Search results displayed: ', dTbody.children('tr').length);
  };

  function cartBttns(el, searchRes) { //Add/Remove to/from cart button functionality
    var item = searchRes.find(element => element.matNoInt === $$(el).parents('tr').attr('id'));

    if ($$(el).hasClass('add') && !checkCart(item)) {
      cart.push(item);
      $$(el).removeClass('add');
      $$(el).children('i').html('cart_fill_badge_minus');
    } else {
      var foundId = cart.findIndex(element => element.matNoInt === item.matNoInt);
      if (foundId > -1) {
        cart.splice(foundId, 1);
        $$(el).addClass('add');
        $$(el).children('i').html('cart_badge_plus');
      }
    };
  };

  function customizeCartBuild(id) { // Customizing shopping cart build-up
    var matArt;
    var showProp = [];
    var enterQty = false;
    switch (id) {
      case 'productCart':
        matArt = 'FERT';
        showProp = ['matNoExt', 'matName', 'uom'];
        enterQty = true;
        break;
      case 'serviceCart':
        matArt = 'DIEN';
        showProp = ['matName', 'uom'];
        break;
      default:
        ;
    };
    return [matArt, showProp, enterQty];
  };

  function buildCart(id, customize) { // Build up cart visualization
    var dTbody = $$('#' + id).find('tbody');
    dTbody.empty();

    for (var i = 0; i < cart.length; i++) {

      var obj = cart[i];
      var objLength = Object.keys(obj).length;
      var objKeys = Object.keys(obj);
      var objVals = Object.values(obj);

      var showProp = customize[1];

      if (objVals[2] != customize[0]) {
        //console.log('MatArt', objVals[2], 'does not match', customize[0], '-> position', i, 'skipped.');
      } else {
        var tr = $$(document.createElement('tr')).attr('id', obj.matNoInt);
        //console.log('Tablerow created:', tr);

        var icn = $$(document.createElement('i')).addClass('icon-checkbox');
        var cb = $$(document.createElement('input')).attr('type', 'checkbox');
        var lbl = $$(document.createElement('label')).addClass('checkbox');
        lbl.append(cb);
        lbl.append(icn);
        var td = $$(document.createElement('td')).addClass('checkbox-cell');
        td.append(lbl);
        tr.append(td);

        for (var j = 0; j < objLength; j++) {
          for (var k = 0; k < objLength; k++) {
            if (objKeys[j] === showProp[k]) {
              var td = $$(document.createElement('td')).addClass('label-cell').html(objVals[j]);
              td.addClass(objKeys[j]);
              tr.append(td);
              break;
            };
          };
        };

        if (customize[2]) { // IF Input of quantity is true in customizing
          var tdQty = $$(document.createElement('td')).addClass('numeric-cell qty');
          var inpQty = $$(document.createElement('input')).attr({
            type: 'number',
            min: '0',
            max: '999',
            value: '1'
          });
          tdQty.append(inpQty);
          tdQty.insertBefore(tr.find('td.uom'));
        };

        var tdPrice = $$(document.createElement('td')).addClass('numeric-cell price');
        var inpPrice = $$(document.createElement('input')).attr({
          type: 'number',
          min: '0',
          max: '999',
          value: '0'
        });
        tdPrice.append(inpPrice);
        tdPrice.insertBefore(tr.find('td.uom'));
        var tdPer = $$(document.createElement('td')).addClass('numeric-cell per')
        var inpPer = $$(document.createElement('input')).attr({
          type: 'number',
          min: '0',
          max: '999',
          value: '1'
        });
        tdPer.append(inpPer);
        tdPer.insertBefore(tr.find('td.uom'));

        dTbody.append(tr);
      };
    };


  };

  function checkCart(el) { // check if item is already in shopping cart
    var inCart = false;
    for (var i = 0; i < cart.length; i++) {
      if (el.matNoInt === cart[i].matNoInt) {
        inCart = true;
      };
    };
    return inCart;
  };

  function getMaterial(matArt, searchCrit) { // get material data

    var objKeys = Object.keys(searchCrit);
    var objVals = Object.values(searchCrit);

    var expclass = new Array();
    for (var i = 0; i < objKeys.length; i++) { //add all exposure classes into one array
      if (objKeys[i].includes('expClass_')) {
        var key = objKeys[i];
        var val = objVals[i]
        if (objVals[i] != "false") {
          expclass.push(val);
        };
        delete searchCrit[key];
      }
    }
    searchCrit["expclass"] = expclass;
    searchCrit["matArt"] = matArt;
    objKeys = Object.keys(searchCrit);
    objVals = Object.values(searchCrit);

    // Following return and compare() are for local development and testing only 
    // and will be replaced in production with backend operations 

    var searchRes = testMaterials;
    return searchRes.filter(compare)

    function compare(el) {
      var match = true;
      for (var i = 0; i < objKeys.length; i++) {
        var key = objKeys[i];
        if (objVals[i] != "false" && objVals[i] != "") {
          if (el.hasOwnProperty(key)) {
            if (Array.isArray(objVals[i])) {
              var arr = objVals[i];
              for (var j = 0; j < arr.length; j++) {
                if (!el[key].includes(arr[j])) {
                  match = false;
                };
              }
            } else {
              if (objVals[i] != el[key]) {
                match = false;
              }
            }
          }
        } else {
          continue;
        }
      }
      return match;
    };
  };


});

// Custom Code for Customer Cockpit
$$(document).on('page:beforein', '.page[data-name="form-customer-cockpit"]', function (e) {
  // For Development & testing only ////////////////////////////////
  var customerData = {
    name1: 'Franz',
    name2: 'Bauer',
    street: 'R4',
    houseno: '14',
    zipcode: '68161',
    city: 'Mannheim',
    tel: '0123 4567890',
    mobilephone: '0456 789012',
    fax: '0123 4567891',
    email: 'einkauf@bauer-bau.de',
    cbEpodMail: ['off'],
    brsch: 'DE04',
    kukla: 'a1',
  };
  $$('.fill-form-from-data').on('click', function () {
    app.form.fillFromData('#customer-data', customerData);
  });
  /////////////////////////////////////////////////////////
  addOptionsToSelect($$(this), salesCustomizing);

  // Auto fill from user data
  autoFill('#customer-data');

  app.on('tabShow', function (tabEl) { // Action on swiping tabs
    //Code for "send tab"
    if (tabEl.id === "tab-2") {
      var data = app.form.convertToData('#customer-data');

      if (!checkFields('#customer-data')) {
        $$(tabEl).find('a.send').addClass('button-fill').on('click', function (e) {
          sendData(data);
        });
      };
    };
  });

  app.on('tabHide', function (tabEl) { // Action on swiping tabs
    if (tabEl.id === "tab-2") {
      $$(tabEl).find('ul.emptyFields').empty();
      $$(tabEl).find('a.send').removeClass('button-fill').off('click')
    };
  });
});

// Custom Code for Ship-to Cockpit
$$(document).on('page:beforein', '.page[data-name="form-ship-to-cockpit"]', function (e) {
  // For Development testing ////////////////////////
  var ship2Data = {
    name1: 'Spaß im Quadrat',
    name2: 'Trampolinhalle',
    street: 'R4',
    houseno: '14',
    zipcode: '68161',
    city: 'Mannheim',
    tel: '0123 4567890',
    email: 'polier@muster-bau.de',
    cbEpodMail: 'off',
    bran1: 'DE04',
    gpsbehave: '2',
  };
  $$('.fill-form-from-data').on('click', function () {
    app.form.fillFromData('#ship-to-data', ship2Data);
  });
  //////////////////////////////////////////////////////

  addOptionsToSelect($$(this), salesCustomizing);

  // Auto fill from user data
  autoFill('#ship-to-data');

  app.on('tabShow', function (tabEl) { // Action on swiping tabs
    //Code for "send tab"
    if (tabEl.id === "tab-2") {
      var data = app.form.convertToData('#ship-to-data');

      if (!checkFields('#ship-to-data')) {
        $$(tabEl).find('a.send').addClass('button-fill').on('click', function (e) {
          sendData(data);
        });
      };
    };
  });

  app.on('tabHide', function (tabEl) { // Action on swiping tabs
    if (tabEl.id === "tab-2") {
      $$(tabEl).find('ul.emptyFields').empty();
      $$(tabEl).find('a.send').removeClass('button-fill').off('click')
    };
  });
});

// remove tab actions before closing respective page
$$(document).on('page:beforeout', '.page', function (e) {
  app.off('tabShow');
  app.off('tabHide');
});