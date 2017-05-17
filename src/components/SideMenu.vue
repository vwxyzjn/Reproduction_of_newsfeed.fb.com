<template>
	<div class="side-menu">
		<div class="menu-button" >
			<div class="text">Menu</div>
			<div class="icon" @mouseover="hover_menu()" @mouseleave="leave_menu()" @click="toggle_menu()">
				<div class="line" id="top_line"></div>
				<div class="line"></div>
				<div class="line" id="bottom_line"></div>
			</div>
		</div>
		<div class="menu-bar">
			<div class="menu-item-wrapper" @click = "route_to('/')">
				<div class="menu-item">
					<div class="item-text" :id="$route.name == 'Welcome1' ? 'selected-text' : 'not-selected'">
						Welcome to News Feed
					</div>
					<div class="bullet">
						<div class="item-bullet" :id="$route.name == 'Welcome1' ? 'selected-bullet' : 'not-selected'"></div>
					</div>
				</div>
			</div>
			<div class="menu-item-wrapper" @click = "route_to('/the-stories-you-care-about')">
				<div class="menu-item">
					<div class="item-text" :id="$route.name == 'Stories2' ? 'selected-text' : 'not-selected'">
						The Stories You Care About
					</div>
					<div class="bullet">
						<div class="item-bullet" :id="$route.name == 'Stories2' ? 'selected-bullet' : 'not-selected'"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="menu-bar-right-in">
			
		</div>
	</div>
</template>

<script>
import TweenMax from "gsap/TweenMax.js"
import TimelineMax from "gsap/TimelineMax.js"
import Bus from './EventBus'
import {routes_record} from '@/router/index'

console.log(routes_record)

export default {
  name: 'sidemenu',
  data(){
  	return{
  		menu_opened: false,
  		switched_color: false,
  		supposed_color: false
  	}
  },
  methods:{
  	hover_menu(){
  		TweenMax.to(".icon #top_line", 0.15, {transform: "translate(0, -2px)"})
  		TweenMax.to(".icon #bottom_line", 0.15, {transform: "translate(0, 2px)"})
  	},
  	leave_menu(){
  		TweenMax.to(".icon #top_line", 0.15, {transform: "translate(0, 0)"})
  		TweenMax.to(".icon #bottom_line", 0.15, {transform:" translate(0, 0)"})
  	},
  	toggle_menu(){
  		if(!this.menu_opened){
  			TweenMax.to(".side-menu", 1, {backgroundColor: "rgba(0, 0, 0, 0.3)"})
  			TweenMax.to(".side-menu .menu-bar-right-in", 1, {transform: "translate(0px)"})
  			TweenMax.to(".side-menu .menu-bar .menu-item-wrapper", 1, {height: "49px",force3D: true})
  			TweenMax.to(".side-menu .menu-bar .menu-item-wrapper .menu-item .item-text", 0.5, {opacity: 0.4,force3D: true, delay: 0.5})
  			TweenMax.to(".side-menu .menu-bar .menu-item-wrapper .menu-item #selected-text", 0.5, {opacity: 1,force3D: true, delay: 0.5})
  			if (this.supposed_color){
  				this.swtich_menu_color()
  			}
  			this.menu_opened = true
  		}
  		else{
  			TweenMax.to(".side-menu", 1, {backgroundColor: "rgba(0, 0, 0, 0)"})
  			TweenMax.to(".side-menu .menu-bar-right-in", 1, {transform: "translate(350px)"})
  			TweenMax.to(".side-menu .menu-bar .menu-item-wrapper", 1, {height: "25px",force3D: true})
  			TweenMax.to(".side-menu .menu-bar .menu-item-wrapper .menu-item .item-text", 0.5, {opacity: 0,force3D: true})
  			TweenMax.to(".side-menu .menu-bar .menu-item-wrapper .menu-item #selected-text", 0.5, {opacity: 0,force3D: true})
  			if (this.supposed_color){
  				this.swtich_menu_color()
  			}
  			this.menu_opened = false
  		}
  	},
  	route_to(routes){
  		// this is a temporary fix;
  		if(this.menu_opened){
  			this.toggle_menu()
  		}
  		this.$router.push(routes)
  	},
  	swtich_menu_color(){
  		let tl = new TimelineMax()
  		if (!this.switched_color){
  			tl.to('.side-menu .menu-button',0.3, {color: "#3b5999", force3D: true})
  			tl.to('.side-menu .menu-button .icon .line',0.3, {backgroundColor: "#3b5999", force3D: true}, '-=0.3')
  			tl.to('.side-menu .menu-bar .menu-item-wrapper .menu-item .bullet .item-bullet',0.3, {borderColor: "#3b5999", force3D: true}, '-=0.3')
  			tl.to('#selected-bullet', 0.3,{backgroundColor: "#3b5999"}, '-=0.3')
  			this.switched_color = true
  		}
  		else {
  			tl.to('.side-menu .menu-button',0.3, {color: "#fff", force3D: true})
  			tl.to('.side-menu .menu-button .icon .line',0.3, {backgroundColor: "#fff", force3D: true}, '-=0.3')
  			tl.to('.side-menu .menu-bar .menu-item-wrapper .menu-item .bullet .item-bullet',0.3, {borderColor: "#fff", force3D: true}, '-=0.3')
  			tl.to('#selected-bullet', 0.3,{backgroundColor: "#fff"}, '-=0.3')
  			this.switched_color = false
  		}
  	}
  },
  created(){
  	Bus.$on('menu-loading', (timeline) => {
  		timeline.to('.side-menu',1, {opacity: 1}, '-=1')
  	})
  	Bus.$on('switching-color', () => {
  		this.swtich_menu_color()
  		this.supposed_color = true
  	})
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
.side-menu{
	font-family: 'Source Sans Pro', sans-serif;
	opacity: 0;
	top: 0;
	height: 100%;
	width: 100%;
	z-index: 100;
	position: absolute;

	.menu-button{
		color: #fff;
		position: absolute;
		top: 25px;
		right: 25px;
		display: flex;
		align-items: center;
		z-index: 30;

		.text{
			display: inline-block;
			margin: 5px 15px 10px 0px;
		}
		.icon {
			display: inline-block;
			.line{
				background-color: #fff;
				margin: 0 auto 5px;
				width: 20px;
				height: 3px;
			}
		}
	}

	.menu-bar {
		position: absolute;
		height: 100%;
		right: 0;
		bottom: 0;
		width: 350px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		z-index: 1;

		.menu-item-wrapper {
			width: 100%;
			height: 25px;

			.menu-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30px 0 35px;
				height: 100%;
				
				
				.item-text{
					color: #fff;
					opacity: 0; //change to 0.4
				}

				#selected-text{
					opacity: 0; // change to 1
				}

				.bullet{
					.item-bullet{
						border: solid 2px #fff;
						background-color: rgba(255, 255, 255, 0);
						display: inline-block;
						margin: auto;
						height: .9rem;
						width: .9rem;
						border-radius: .45rem;
						opacity: 0.4;
						transform: scale(0.7);
					}

					#selected-bullet{
						background-color: #fff;
						border-width: 0px;
						height: .9rem;
						width: .9rem;
						opacity: 1;
						transform: scale(1);
					}
				}

			}
		}
	}

	.menu-bar-right-in{
		background-color: #3b5999;
		position: absolute;
		height: 100%;
		right: 0;
		bottom: 0;
		width: 350px;
		transform: translate(350px);
	}
}
</style>
