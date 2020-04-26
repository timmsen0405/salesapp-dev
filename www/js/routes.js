var routes = [
  {
    name: 'home',
    path: '/',
    url: './index.html',
  },
  { // Route to Create Quotation Form
    name: 'quotation-cp',
    path: '/quotation-cp/',
    url: '../pages/quotation-cp.html',
  },
  { // Route to Customer Cockpit Form
    name: 'customer-cp',
    path: '/customer-cp/',
    url: '../pages/customer-cp.html',
  },
  { // Route to Create Ship-to Form
    name: 'shipto-cp',
    path: '/shipto-cp/',
    url: '../pages/shipto-cp.html',
  },
  { //404 Not Found
    name: '404',
    path: '(.*)',
    url: '../pages/404.html',
  },
];
