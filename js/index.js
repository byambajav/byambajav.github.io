(function() {
    $(function() {
        var a = $(document.body);
        return ['github', 'linkedin', 'twitter', 'facebook', 'email'].forEach(function(b) {
            var c, d;
            var logo = $('#logo');
            return d = '#' + b, c = 'color ' + b, a.on('mouseenter', d, function() {
                return a.addClass(c) && logo.attr('src', '/img/initials_white.png');
            }).on('mouseleave', d, function() {
                return a.removeClass(c) && logo.attr('src', '/img/initials_green.png');
            })
        });
    });
}).call(this);
