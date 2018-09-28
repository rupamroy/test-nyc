# Overview 
This project demos an issue with the nyc on Windows 10

# Env
Windows 10 mingw64
node 8.11.1

# Problem

There is only one test and runs fine when we run the command
```
$(npm bin)/ts-node node_modules/jasmine/bin/jasmine.js 'config/**/*.ts'
```

But this does not work in collaboration with nyc
```
$(npm bin)/nyc --report-dir coverage/server $(npm bin)/ts-node node_modules/jasmine/bin/jasmine.js 'config/**/*.ts'
```

Slight improvement is noticed whenb we run 

```
$(npm bin)/nyc --report-dir coverage/server < $(npm bin)/ts-node node_modules/jasmine/bin/jasmine.js 'config/**/*.ts'
```

Here specs run as if without the tsconfig throwing lint issues.