$.getJSON('https://gist.githubusercontent.com/MDjavaheri/1bc3607a4b02d05d8a8af0fd9ce41d27/raw/b28b91868798042cb075c25365edf30fbecf5d9c/links.json')
        .done(data => chrome.storage.sync.set({links: data}));
        