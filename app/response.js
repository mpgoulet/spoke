{ statusCode: 500,
  body:
   '--uuid:33a48db8-55e5-479a-b21c-b9f246303026\r\nContent-Type: application/xop+xml; charset=UTF-8; type="application/soap+xml"\r\nContent-Transfer-Encoding: binary\r\nContent-ID: <root.message@cxf.apache.org>\r\n\r\n<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><soap:Fault><soap:Code><soap:Value>soap:Receiver</soap:Value></soap:Code><soap:Reason><soap:Text xml:lang="en">Fault occurred while processing.</soap:Text></soap:Reason><soap:Detail><ns1:Exception xmlns:ns1="http://ws.tririga.com"/></soap:Detail></soap:Fault></soap:Body></soap:Envelope>\r\n--uuid:33a48db8-55e5-479a-b21c-b9f246303026--',
  headers:
   { 'x-powered-by': 'Servlet/3.0',
     'content-type':
      'multipart/related; type="application/xop+xml"; boundary="uuid:33a48db8-55e5-479a-b21c-b9f246303026"; start="<root.message@cxf.apache.org>"; start-info="application/soap+xml"',
     'x-ua-compatible': 'IE=edge',
     'content-language': 'en-US',
     'content-length': '617',
     'set-cookie':
      [ 'JSESSIONID=0000DxGLcHuLGpvKQG7WKneTua0:3ad85b7a-1ea9-48ed-8921-7c16a4af068c; Path=/; HttpOnly' ],
     connection: 'Close',
     date: 'Sun, 19 Aug 2018 22:32:31 GMT',
     expires: 'Thu, 01 Dec 1994 16:00:00 GMT',
     'cache-control': 'no-cache="set-cookie, set-cookie2"' },
  request:
   { uri:
      { protocol: 'http:',
        slashes: true,
        auth: null,
        host: '10.211.55.3:8001',
        port: '8001',
        hostname: '10.211.55.3',
        hash: null,
        search: null,
        query: null,
        pathname: '/ws/TririgaWS',
        path: '/ws/TririgaWS',
        href: 'http://10.211.55.3:8001/ws/TririgaWS' },
     method: 'POST',
     headers:
      { 'User-Agent': 'strong-soap/1.12.1',
        Accept:
         'text/html,application/xhtml+xml,application/xml,text/xml;q=0.9,*/*;q=0.8',
        'Accept-Encoding': 'none',
        'Accept-Charset': 'utf-8',
        Connection: 'close',
        Host: '10.211.55.3:8001',
        'Content-Length': 435,
        'Content-Type': 'application/soap+xml; charset=utf-8',
        Authorization: 'Basic c3lzdGVtOmFkbWlu' } } }
