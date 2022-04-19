var webpage = require('webpage'),
    page = webpage.create(),
    system  = require('system'),
    webadd = null,
    fileName = '';
if (system.args.length <= 1) {
    console.log('Enter web url');
    phantom.exit();
}
webadd = system.args[1];
fileName = system.args[2];
// This is the code that captures the website
page.open(webadd,function(status){
    if (status === "success") {
        page.render(fileName +'.jpg');
        console.log('Image render is done!');
        phantom.exit();
    }
});
