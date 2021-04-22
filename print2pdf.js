function PrintTable() {
    var printMe = document.getElementById('tab');
    var wme = window.open("","","width:900,height:900");
    wme.document.write(printMe.outerHTML);
    wme.document.close();
    wme.focus();
    wme.print();
    wme.close();
}