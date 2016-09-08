# Hunting memory leaks 

The idea is to practice memory consumption measurement and to identify JavaScript memory leaks.


Things you will need:
- [nvm](https://github.com/creationix/nvm)
- Chrome (for heap snapshots, alternatively you can use [heapdump](https://www.npmjs.com/package/heapdump)) 


## Setup
Once you have nvm, you can execute 

`$ nvm install`

and it will install the targetted Node version (if neccessary).

After that, you should install dependencies:

`$ npm install`

to get node-inspector installed. You can now debug all examples by running npm:

`$ npm run debug1`

will run the "example1.js" file with node-inspector.
