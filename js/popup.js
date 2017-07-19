function populateLinks() {
    const source = $('.data').html();
    const template = Handlebars.compile(source);
    // const jsonData = $.getJSON("../data.json");
    chrome.storage.sync.get('links', (json) => {
        source.html(template(json));
    });
}
populateLinks();
