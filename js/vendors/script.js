$(document).ready(function () {

    var theInterval;

    function startSlide() {
        theInterval = setInterval(() => {
            var tabs = $('.nav-tabs > a');
            var active = tabs.filter('.active');
            var next = active.next('a').length ? active.next('a') : tabs.filter(':first-child');
            next.tab('show')
        }, 10000)
    }

     
    function stopSlide() {
        clearInterval(theInterval);
    }



    $(function () {
        startSlide();
        $('.tab-content .tab-pane img, .tab-content .tab-pane h2 , .tab-content .tab-pane p , .features-nav').hover(function () {
            stopSlide();
        }, function () {
            startSlide();
        })
    });

    
});

