(function() {
    $(function() {
        var a = $(document.body);
        return ["github", "linkedin", "twitter", "facebook", "email"].forEach(function(b) {
            var c, d;
            return d = "#" + b, c = "color " + b, a.on("mouseenter", d, function() {
                return a.addClass(c)
            }).on("mouseleave", d, function() {
                return a.removeClass(c)
            })
        })
    })
}).call(this);
