function a() {
    document.getElementById('sldiv').style.display = 'none';
    $('#sldiv').fadeIn('slow');
    //Check to see if the window is top if not then display button
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

    var w= $(window).width();
    if (w < 1200) {
        document.getElementById('foot').style.borderRight = '0px';
        //document.getElementById('body').style.backgroundColor = 'rgb(234, 234, 234)';
        for (var i = 1; i < 8; i++)
        {
            document.getElementById('side' + i).style.boxShadow = '1px 2px 3px rgba(0,0,0,.3)';
        }
        
    }
   
   
    for (var i = 1; i < 8; i++) {
        article(i);
    }
    for (var j = 1; j < 8; j++) {
        sidearticle(j);
    }
    for (var k = 1; k < 8; k++) {
        slidearticle(k);
    }
 
       
    $(window).load(function () {
        $(".loader").fadeOut("slow");
        
        
    });
   
   
}

//1st article

function article(x) {
    var ourRequest = new XMLHttpRequest();
    if (x == 1) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=latest&apiKey=69e7fad93b294937beb6ec4d16434e2c');    
    }
    if (x == 2) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');   
    }
    if (x == 3) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (x == 4) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');

    }
    if (x == 5) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (x == 6) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');

    }
    if (x == 7) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');

    }
 
   // ourRequest.onloadstart=function(){

    //}
    ourRequest.onloadend=function(){
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status == "ok") {
                injectmain(ourData,x);
            } else {
                warn1();
            }

        } else {
            console.log('Connected to the server but something went wrong.');
        }
        
    }
    ourRequest.onerror = function () {
        console.log('Problem in the network.');

    }
    ourRequest.send();
}

function injectmain(data, y) {
    console.log(data);
    $('#arc'+y).fadeIn('slow');
    document.getElementById('description'+y).innerHTML = data.articles[2].description;
    document.getElementById('author'+y).innerHTML = data.articles[2].author;
    document.getElementById('title'+y).innerHTML = data.articles[2].title;
    document.getElementById('publishedAt' + y).innerHTML = data.articles[2].publishedAt;
    document.getElementById('urlToImage' + y).src = data.articles[2].urlToImage;
    document.getElementById('url' + y).href = data.articles[2].url;

}



// side article

function sidearticle(x) {
    var ourRequest = new XMLHttpRequest();
    if (x == 1) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=latest&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (x == 2) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (x == 3) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (x == 4) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');

    }
    if (x == 5) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (x == 6) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');

    }
    if (x == 7) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');

    }

    // ourRequest.onloadstart=function(){

    //}
    ourRequest.onloadend = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            if (ourData.status == "ok") {
                injectside(ourData, x);
            } else {
                warn1();
            }

        } else {
            console.log('Connected to the server but something went wrong.');
        }

    }
    ourRequest.onerror = function () {
        console.log('Problem in the network.');

    }
    ourRequest.send();
}

function injectside(data, y) {
    console.log(data);
    $('#side' + y).fadeIn('slow');
    document.getElementById('sidetitle' + y).innerHTML = data.articles[0].title;
    document.getElementById('sideimg' + y).src = data.articles[0].urlToImage;
    document.getElementById('sideurl' + y).href = data.articles[0].url;

}


// slide article

function slidearticle(x) {
    var ourRequest = new XMLHttpRequest();
    if (x == 1) {
        ourRequest.open('GET', ' https://newsapi.org/v1/articles?source=cnbc&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (x == 2) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (x == 3) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (x == 4) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=bloomberg&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');

    }
    if (x == 5) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');
    }
    if (x == 6) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=buzzfeed&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');

    }
    if (x == 7) {
        ourRequest.open('GET', 'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=69e7fad93b294937beb6ec4d16434e2c');

    }

    // ourRequest.onloadstart=function(){

    //}
    ourRequest.onloadend = function () {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            
            if (ourData.status == "ok") {
                injectslide(ourData, x);
            } else {
                warn1();
            }

        } else {
            console.log('Connected to the server but something went wrong.');
        }

    }
    ourRequest.onerror = function () {
        console.log('Problem in the network.');

    }
    ourRequest.send();
}

function injectslide(data, y) {
    console.log(data);
    document.getElementById('slidetitle' + y).innerHTML = data.articles[1].title;
    document.getElementById('slideimg' + y).src = data.articles[1].urlToImage;
    document.getElementById('slideurl' + y).href = data.articles[1].url;
    document.getElementById('slidesource' + y).innerHTML = data.source;

}


