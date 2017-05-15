<template>
	<div class="side-menu">
		<div class="menu-button" >
			<div class="text">Menu</div>
			<div class="icon" @mouseover="hover_menu()" @mouseleave="leave_menu()">
				<div class="line" id="top_line"></div>
				<div class="line"></div>
				<div class="line" id="bottom_line"></div>
			</div>
		</div>
		<div class="menu-bar">
			<div class="menu-item-wrapper">
				<div class="menu-item">
					<div class="item-text">
						Welcome to News Feed
					</div>
					<div class="bullet">
						<div class="item-bullet"></div>
					</div>
				</div>
			</div>
			<div class="menu-item-wrapper">
				<div class="menu-item">
					<div class="item-text">
						The Stories You Care About
					</div>
					<div class="bullet">
						<div class="item-bullet"></div>
					</div>
				</div>
			</div>
			<div class="menu-item-wrapper">
				<div class="menu-item">
					<div class="item-text">
						Three Main Ranking Factor
					</div>
					<div class="bullet">
						<div class="item-bullet"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import TweenMax from "gsap";



export default {
  name: 'app',
  methods:{
  	hover_menu(){
  		TweenMax.to(".icon #top_line", 0.15, {transform: "translate(0, -2px)"})
  		TweenMax.to(".icon #bottom_line", 0.15, {transform: "translate(0, 2px)"})
  	},
  	leave_menu(){
  		TweenMax.to(".icon #top_line", 0.15, {transform: "translate(0, 0)"})
  		TweenMax.to(".icon #bottom_line", 0.15, {transform:" translate(0, 0)"})
  	}
  }
}
</script>

<style lang="scss" scoped>
.side-menu{
	font-family: 'Source Sans Pro', sans-serif;

	.menu-button{
		color: #fff;
		position: absolute;
		top: 25px;
		right: 25px;
		display: flex;
		align-items: center;
		z-index: 100;

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

		.menu-item-wrapper {
			width: 100%;
			height: 49px;

			.menu-item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 30px 0 35px;
				height: 100%;
				
				
				.item-text{
					color: #fff;
				}

				.bullet{
					.item-bullet{
						border-color: #fff;
						background: #fff;
						display: inline-block;
						margin: auto;
						height: .9rem;
						width: .9rem;
						border-radius: .45rem;
					}
				}

			}
		}
	}
}
</style>
