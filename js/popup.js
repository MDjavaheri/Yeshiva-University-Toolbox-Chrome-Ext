function populateLinks() {
    const source = $('.data').html();
    const template = Handlebars.compile(source);
    const jsonData = $.getJSON("../data.json");
    source.html(template(jsonData.links));
}

$(document).ready(function(){
    populateLinks();
});