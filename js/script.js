$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 800,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});

const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

imageModal.addEventListener('show.bs.modal', event => {
	const trigger = event.relatedTarget;
	const imgSrc = trigger.getAttribute('data-bs-img');
	modalImage.src = imgSrc;
});


// IMG MODAL

  document.addEventListener('DOMContentLoaded', () => {
		const images = document.querySelectorAll('.open-img')
		const modalImage = document.getElementById('modalImage')
		const modalElement = document.getElementById('imageModal')

		// Bootstrap modal instance
		const imageModal = new bootstrap.Modal(modalElement)

		images.forEach(img => {
			img.addEventListener('click', () => {
				modalImage.src = img.src // put clicked image into modal
				imageModal.show() // open modal
			})
		})
	})






