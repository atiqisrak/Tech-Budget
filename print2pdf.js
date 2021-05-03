function printTable(){
    var printMe = document.getElementById('tab');
    var wme = window.open("","","width:900,height:900");

    
    wme.document.write(printMe.outerHTML);
    wme.document.close();
    wme.focus();
    wme.print();
    wme.close();
}

function printChart1(){
    var image = myChart1.toBase64Image();

    console.log(image);

    // Trigger the download
    var a = document.createElement('a');
    a.href = myChart1.toBase64Image();
    a.download = 'Estimated Impressions vs Portal/Site.png';
    a.click();

}


function printChart2(){
    var image = myChart2.toBase64Image();

    console.log(image);

    // Trigger the download
    var a = document.createElement('a');
    a.href = myChart2.toBase64Image();
    a.download = 'Estimated Impressions vs Portal/Site.png';
    a.click();

}
function printChart3(){
    var image = myChart3.toBase64Image();

    console.log(image);

    // Trigger the download
    var a = document.createElement('a');
    a.href = myChart3.toBase64Image();
    a.download = 'Estimated Leads per channel.png';
    a.click();

}
function printChart4(){
    var image = myChart4.toBase64Image();

    console.log(image);

    // Trigger the download
    var a = document.createElement('a');
    a.href = myChart4.toBase64Image();
    a.download = 'Estimated Clicks vs Portal/Site.png';
    a.click();

}