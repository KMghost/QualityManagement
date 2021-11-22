<template>
	<el-container class="home">
		<el-aside width="200px" style="background-color: #ffffff">
			<el-menu :default-openeds="['2']">
				<div class="logo">
					<img src="../../assets/images/logo.png"/>
				</div>
				<el-menu-item index="1" style="color: #4e4f51"><i class="el-icon-menu"></i>首页</el-menu-item>
				<el-submenu index="2">
					<template slot="title"><i class="el-icon-notebook-2"></i>质量表格</template>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title"><i class="el-icon-collection"></i>质量标准</template>
				</el-submenu>
				<el-submenu index="4">
					<template slot="title"><i class="el-icon-document-checked"></i>质量数据</template>
				</el-submenu>
				<el-submenu index="5">
					<template slot="title"><i class="el-icon-document"></i>质检报告</template>
				</el-submenu>
			</el-menu>
		</el-aside>

		<el-container>
			<el-header style="text-align: right; font-size: 12px">
				<el-dropdown>
					<i style="margin-right: 15px">管理员</i>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item style="padding-top: 5px"><i class="el-icon-edit-outline"></i>修改密码
						</el-dropdown-item>
						<el-dropdown-item style="padding-bottom: 5px"><i class="el-icon-switch-button"></i>退出登录
						</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-header>

			<el-main>
				<div v-show="leftNavList.length" style="color:#6d6c6c;font-size: 20px;margin: 20px auto;font-weight: 600;max-width: 720px;">{{'制造执行系统'}}</div>
				<div class="modelWindow">
					<!--首页控件按钮-->
					<div class="workModel">
						<div @click="goModel(data.path)" class="oneModel oneModelColor2"
							 v-for="(data,index) in leftNavList" :key="index">
							<i :class="'con iconfont '+ data.icon"></i>
							<p>{{ data.title }}</p>
						</div>
					</div>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import index from './index.js'

export default {
	...index,
	computed: {}

}
</script>

<style scoped lang="css">
.home {
	background-image: url("../../assets/images/home_bg.jpg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	/*overflow-y: auto;*/
	/*box-sizing: border-box;*/
}
/* 左上logo */
.logo {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	height: 74px;
}
img{
	width: 100%;
	padding: 0 20px;
	box-sizing: border-box;
	margin-bottom: 10px;
}
/*主体的logo*/
.con {
	color: #ffffff;
	font-size: 55px;
}

.workModel {
	margin: 0 auto;
	height: auto;
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
}

.modelWindow {
	width: 100%;
	max-width: 720px;
	margin: 0 auto;
	/*height:auto;*/
	height: auto;
	box-sizing: border-box;
}

p {
	margin-top: 5px;
	color: #ffffff;
	box-sizing: border-box;
	padding: 0 25px;
	font-size: 20px;
	text-align: center;
}

.oneModel {
	width: 200px;
	height: 180px;
	margin-right: 40px;
	margin-bottom: 40px;
	/*text-align: center;*/
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: box-shadow 0.5s;
	-webkit-transition: box-shadow 0.5s; /* Safari */
	box-shadow: 0 0 4px 4px rgba(0, 21, 41, .08);

}

.oneModelColor2 {
	cursor: pointer;
	background: linear-gradient(180deg, #0979e7, #76d3ff);
}

/* 标题头部与侧边栏 */
.el-header {
	background-color: #B3C0D1;
	color: #333;
	line-height: 60px;
}

.el-aside {
	color: #333;
}

.el-menu-item-group__title {
	padding: 0px;
}

/*主体铺满页面*/
html, body, #app, .el-container {
	/*设置内部填充为0，几个布局元素之间没有间距*/
	padding: 0px;
	/*外部间距也是如此设置*/
	margin: 0px;
	/*统一设置高度为100%*/
	height: 100%;
}

/*主体样式*/
.el-row {
	padding-left: 25%;
	margin-bottom: 0px;

&
:last-child {
	margin-bottom: 0;
}

}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
}

.row-bg {
	padding: 10px 0;
	background-color: #f9fafc;
}
</style>
