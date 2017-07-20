function populateLinks() {
    debugger
    const source = `<ul class="links">
                        {{#each links as |link|}}
                            <li class={{link.category}}><a href={{link.url}}>{{link.name}}</a></li>
                        {{/each}}
                    </ul>`;
    const template = Handlebars.compile(source);
    // const jsonData = $.getJSON("../data.json");
    chrome.storage.sync.get('links', (json) => {
        source.html(template(json));
    });
}
populateLinks();
