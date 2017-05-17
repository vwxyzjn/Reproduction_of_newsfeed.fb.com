<template>
	<div class="facebook-logo invert-colors">
		<svg class="svg-fb-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 266.893 266.895">
	  		<path class="background" d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225H248.082z"></path>
	  		<path class="f" d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585v99.803H182.409z"></path>
		</svg>
		<div class="title">News Feed</div>
	</div>
</template>

<script>
import TweenMax from "gsap/TweenMax.js"
import TimelineMax from "gsap/TimelineMax.js"
import Bus from './EventBus'

export default {
  name: 'logo',
  created(){
  	Bus.$on('logo-loading', (timeline) => {
  		timeline.to('.facebook-logo',1, {opacity: 1})
  	})
  	Bus.$on('switching-color', () => {
  		let tl = new TimelineMax()
  		tl.to('.facebook-logo .svg-fb-logo .background',0.3, {fill: "#3c5a99", force3D: true}, '-=0.3')
  		tl.to('.facebook-logo .svg-fb-logo .f',0.3, {fill: "#fff", force3D: true}, '-=0.3')
  		tl.to('.facebook-logo .title',0.3, {color: "#3c5a99", force3D: true}, '-=0.3')
  	})
  }
}
</script>

<style lang="scss" scoped>
.facebook-logo{
	font-family: 'Source Sans Pro', sans-serif;
	position: absolute;
	margin: 30px;
	opacity: 0;
	transition: opacity .2s ease-out;
	display: block;
	z-index: 100;

	.svg-fb-logo {
		width: 35px;
		height: 35px;
		vertical-align: middle;

		.background {
			fill: #fff;
		}

		.f {
			fill: #3c5a99;
		}
	}

	.title {
		vertical-align: middle;
		display: inline-block;
		color: #fff;
		margin: 0 0 0 8px;
	}
}

.invert-colors{
	color: #fff;
}




</style>
