var routes = [
  {
    path: '/',
    url: './index.html',
  },
  { // Route to Create Quotation Form
    path: '/quotation-cp/',
    url: './pages/quotation-cp.html',
  },
  { // Route to Customer Cockpit Form
    path: '/customer-cp/',
    url: './pages/customer-cp.html',
  },
  { // Route to Create Ship-to Form
    path: '/shipto-cp/',
    url: './pages/shipto-cp.html',
  },
  { //404 Not Found
    path: '(.*)',
    url: './pages/404.html',
  },
];
