shift + alt + f: format the code 

ts-node xxx.ts: run the ts code without having the js output 

tsc xxx.ts: will generate all of the invovled js outputs 

npm install --save @types/lodash   : get the typescirpt version package 

after running the npm install, the dependency will be automatically added on the dependency part of package.json

deleting node_modules before commiting the code

after getting the code, run "npm i" to get all of the node_modules (the alias of "npm install")

npm outdated: check if there is any outdated library

npm install underscore@1.8.2: install a specific version 

npm search scala:  search a package 

npm ls:  list all local pacakge 

npm t: npm test 

npm install --save @types/react is like the 2.0 of the tsd command 

npm update: automatically update the library 

tsc --init

npm cache clean: clean the cache 

use "tsc" to compile the ts to js, from src to dist. It will check the tsconfig.json

tsc --watch: will monitor on the files and build so long as the files change. 

define " "start": "node ./dist/main.js"" in the package.json, then run "npm start"

basically, we can define any tasks in the "scripts{}" section of package.json

npm install grunt –-save-dev: need this --save-dev when dealing with any build tool, like grunt. will add the dependency as dev-dependency

 

grunt is a task runner