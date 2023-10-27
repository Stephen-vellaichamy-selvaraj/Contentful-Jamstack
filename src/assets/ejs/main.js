import { ready } from 'brei-project-utils';

// Example of importing a custom module
// import { primaryNav } from './modules/primaryNav';

const main = {

	elem: {
	},

	init() {

		this.bindUIActions();

	},

	bindUIActions() {
		
		$('#homeCarousel').carousel().on('slide.bs.carousel', function(e) {
			$('#homeCarousel .home-carousel__controls span').html((e.to + 1) + '/' + $('#homeCarousel .carousel-item').length);
		});

		$('.brands__tabs button[data-bs-toggle="tab"]').on('shown.bs.tab', function(e) {
			let $parent = $(e.currentTarget).closest('.brands__tabs');
			$parent.scrollLeft(0);
			$parent.scrollLeft($parent.find('button.active').position().left);
		});

		$('.phone__item').on('mouseenter', function(e) {
			$('.phone__item').removeClass('phone__item--active');
			$(e.currentTarget).addClass('phone__item--active');
			$('.phone__image').attr('src', $(e.currentTarget).data('image'));
			$('.phone__image').attr('alt', '\'' + $(e.currentTarget).find('h3').text() + '\' screen shot');
		});
		
		$('.video__modal').on('show.bs.modal', function(e) {
			$(e.currentTarget).find('.modal-content').prepend('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + $(e.currentTarget).data('video') + '?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
		}).on('hide.bs.modal', function(e) {
			$(e.currentTarget).find('.modal-content iframe').remove();
		});

	}

};

ready(function () {
	main.init();
});
