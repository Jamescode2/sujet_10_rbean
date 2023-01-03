function urlParsing(url) {
    let hash = {};

    if (url.slice(0, 7) === 'http://' || url.slice(0, 4) === 'www.' || url.slice(0, 8) === 'https://') {
        
        if (url.slice(0, 4) === 'www.') {
            hash['protocol'] = 'http';
            if (url.search(/[?]/) == -1) {
                if (url.indexOf('/') == -1) {
                    hash['host'] = url.slice(4, url.length);
                } else {
                    hash['host'] = url.slice(4, url.indexOf('/'));
                }
                hash['arguments'] = {};
            } else {
                if (url.indexOf('/') == -1) {
                    hash['host'] = url.slice(4, url.search(/[?]/));
                } else {
                    hash['host'] = url.slice(4, url.indexOf('/'));
                }
                let et = url.slice(url.search(/[?]/) + 1, url.length).split('&');
                for (let i = 0; i < et.length; i++) {
                    hash['arguments'] = {};
                }
                for (let i = 0; i < et.length; i++) {
                    hash['arguments'][et[i].split('=')[0]] = et[i].split('=')[1];
                }

            }
        }
        if (url.slice(0, 7) === 'http://') {
            hash['protocol'] = 'http';
            if (url.search(/[?]/) == -1) {
                if (url.indexOf('/', url.indexOf('/') + 2) == -1) {
                    hash['host'] = url.slice(7, url.length);
                } else {
                    hash['host'] = url.slice(7, url.indexOf('/', url.indexOf('/') + 2));
                }
                hash['arguments'] = {};
            } else {
                if (url.indexOf('/') == -1) {
                    hash['host'] = url.slice(7, url.search(/[?]/));
                } else {
                    hash['host'] = url.slice(7, url.indexOf('/', url.indexOf('/') + 2));
                }
                let et = url.slice(url.search(/[?]/) + 1, url.length).split('&');
                for (let i = 0; i < et.length; i++) {
                    hash['arguments'] = {};
                }
                for (let i = 0; i < et.length; i++) {
                    hash['arguments'][et[i].split('=')[0]] = et[i].split('=')[1];
                }
            }
        }
        if (url.slice(0, 8) === 'https://') {
            hash['protocol'] = 'https';
            if (url.search(/[?]/) == -1) {
                if (url.indexOf('/', url.indexOf('/') + 2) == -1) {
                    hash['host'] = url.slice(8, url.length);
                } else {
                    hash['host'] = url.slice(8, url.indexOf('/', url.indexOf('/') + 2));
                }
                hash['arguments'] = {};
            } else {
                if (url.indexOf('/') == -1) {
                    hash['host'] = url.slice(8, url.search(/[?]/));
                } else {
                    hash['host'] = url.slice(8, url.indexOf('/', url.indexOf('/') + 2));
                }
                let et = url.slice(url.search(/[?]/) + 1, url.length).split('&');
                for (let i = 0; i < et.length; i++) {
                    hash['arguments'] = {};
                }
                for (let i = 0; i < et.length; i++) {
                    hash['arguments'][et[i].split('=')[0]] = et[i].split('=')[1];
                }
            }
        }
    }else{
        hash['protocol'] = 'http';
        if (url.search(/[?]/) == -1) {
            if (url.indexOf('/') == -1) {
                hash['host'] = url.slice(0, url.length);
            } else {
                hash['host'] = url.slice(0, url.indexOf('/'));
            }
            hash['arguments'] = {};
        } else {
            if (url.indexOf('/') == -1) {
                hash['host'] = url.slice(0, url.search(/[?]/));
            } else {
                hash['host'] = url.slice(0, url.indexOf('/'));
            }
            let et = url.slice(url.search(/[?]/) + 1, url.length).split('&');
            for (let i = 0; i < et.length; i++) {
                hash['arguments'] = {};
            }
            for (let i = 0; i < et.length; i++) {
                hash['arguments'][et[i].split('=')[0]] = et[i].split('=')[1];
            }
        }
    }

    return hash;
}

module.exports = urlParsing;