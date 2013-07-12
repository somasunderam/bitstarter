1 #!/usr/bin/env node
2 var fs = require(’fs’);
3 var outfile = "hello.txt";
4 var out = "Hello World 2"
5 fs.writeFileSync(outfile, out);
6 console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
