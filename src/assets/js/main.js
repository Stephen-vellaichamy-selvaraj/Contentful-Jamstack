!(function () {
    "use strict";
    window.matchMedia("(min-width: 400px)"),
        window.matchMedia("(min-width: 768px)"),
        window.matchMedia("(min-width: 1024px)"),
        window.matchMedia("(min-width: 1200px)"),
        window.matchMedia("(min-width: 1440px)"),
        window.matchMedia("(min-width: 1920px)");
    const e = function (e) {
        "loading" !== document.readyState
            ? e()
            : document.addEventListener
            ? document.addEventListener("DOMContentLoaded", e, !1)
            : document.attachEvent("onreadystatechange", function () {
                  "complete" === document.readyState && e();
              });
    };
    Object.assign;
    var t = {
        elem: {},
        init: function () {
            this.bindUIActions();
        },
        bindUIActions: function () {
            $("#homeCarousel")
                .carousel()
                .on("slide.bs.carousel", function (e) {
                    $("#homeCarousel .home-carousel__controls span").html(e.to + 1 + "/" + $("#homeCarousel .carousel-item").length);
                }),
                $('.brands__tabs button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
                    var t = $(e.currentTarget).closest(".brands__tabs");
                    t.scrollLeft(0), t.scrollLeft(t.find("button.active").position().left);
                }),
                $(".phone__item").on("mouseenter", function (e) {
                    $(".phone__item").removeClass("phone__item--active"),
                        $(e.currentTarget).addClass("phone__item--active"),
                        $(".phone__image").attr("src", $(e.currentTarget).data("image")),
                        $(".phone__image").attr("alt", "'" + $(e.currentTarget).find("h3").text() + "' screen shot");
                }),
                $(".video__modal")
                    .on("show.bs.modal", function (e) {
                        $(e.currentTarget)
                            .find(".modal-content")
                            .prepend(
                                '<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
                                    $(e.currentTarget).data("video") +
                                    '?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
                            );
                    })
                    .on("hide.bs.modal", function (e) {
                        $(e.currentTarget).find(".modal-content iframe").remove();
                    });
        },
    };
    e(function () {
        t.init();
    });
})();
