function a() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('.move').fadeIn();
        } else {
            $('.move').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.move').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    var w = $(window).width();
    if (w < 1200) {
        document.getElementById('foot').style.borderRight = '0px';
        //document.getElementById('body').style.backgroundColor = 'rgb(234, 234, 234)';
        for (var i = 1; i < 8; i++) {
            document.getElementById('side' + i).style.boxShadow = '1px 1px 2px rgba(0,0,0,.3)';
        }

    }

    $(window).load(function () {
        $(".loader").fadeOut("slow");

    });
    maincontent();
    for (var x = 1; x < 4; x++) {
        slide(x);
    }

    /// main code begin here
}

function maincontent() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    ourRequest.onload = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status == "ok") {
                createHtml(ourData);
            }

        } else {
            console.log('Connected to the server but something went wrong.');
        }

    };
    ourRequest.onerror = function () {
        console.log('Problem in the network.');
    }
    ourRequest.send();
}

function createHtml(serverData) {
    console.log(serverData);
    //$('#toiOutput').fadeIn('slow');
    var rawTemplate = document.getElementById('rawTemplateNational').innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedTemplate = compiledTemplate(serverData);



    var reslt = document.getElementById('outputNational');
    reslt.innerHTML = generatedTemplate;

}


function slide(z) {
    var ourRequest = new XMLHttpRequest();
    if (z == 1) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (z == 2) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=al-jazeera-english&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (z == 3) {
        ourRequest.open('GET', ' https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }

    ourRequest.onload = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status == "ok") {
                console.log(ourData);
                injectslide(ourData, z);
            }

        } else {
            console.log('Connected to the server but something went wrong.');
        }

    };
    ourRequest.onerror = function () {
        console.log('Problem in the network.');
    }
    ourRequest.send();
}

function injectslide(data, k) {
    if (k == 1) {
        for (var i = 0; i < 2; i++) {
            var y = i + 1;
            document.getElementById('slideimg' + y).src = data.articles[i].urlToImage;
            document.getElementById('slideurl' + y).href = data.articles[i].url;
            document.getElementById('slidetitle' + y).innerHTML = data.articles[i].title;
        }
        for (var m = 2; m < 5; m++) {
            var n = m - 1;
            document.getElementById('sidetitle' + n).innerHTML = data.articles[m].title;
            document.getElementById('sideimg' + n).src = data.articles[m].urlToImage;
            document.getElementById('sideurl' + n).href = data.articles[m].url;
        }
    }
    if (k == 2) {
        for (var i = 0; i < 3; i++) {
            var y = i + 3;
            document.getElementById('slideimg' + y).src = data.articles[i].urlToImage;
            document.getElementById('slideurl' + y).href = data.articles[i].url;
            document.getElementById('slidetitle' + y).innerHTML = data.articles[i].title;
        }
        for (var m = 3; m < 6; m++) {
            var n = m + 1;
            document.getElementById('sidetitle' + n).innerHTML = data.articles[m].title;
            document.getElementById('sideimg' + n).src = data.articles[m].urlToImage;
            document.getElementById('sideurl' + n).href = data.articles[m].url;
        }
    }
    if (k == 3) {
        for (var i = 0; i < 2; i++) {
            var y = i + 6;
            document.getElementById('slideimg' + y).src = data.articles[i].urlToImage;
            document.getElementById('slideurl' + y).href = data.articles[i].url;
            document.getElementById('slidetitle' + y).innerHTML = data.articles[i].title;
        }
        for (var m = 3; m < 4; m++) {
            var n = m + 4;
            document.getElementById('sidetitle' + n).innerHTML = data.articles[m].title;
            document.getElementById('sideimg' + n).src = data.articles[m].urlToImage;
            document.getElementById('sideurl' + n).href = data.articles[m].url;
        }
    }

}