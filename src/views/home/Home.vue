<template>
	<el-container>
		<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			<el-menu :default-openeds="['2']">
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-menu"></i>首页</template>
				</el-submenu>
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
						<el-dropdown-item style="padding-top: 5px"><i class="el-icon-edit-outline"></i>修改密码</el-dropdown-item>
						<el-dropdown-item style="padding-bottom: 5px"><i class="el-icon-switch-button"></i>退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-header>

			<el-main>
				<el-row :gutter="150" style="padding-top: 10%;">
					<el-col :span="3"><div class="grid-content bg-purple">
						<el-row>
							<el-button type="primary">质量表格</el-button>
						</el-row>
					</div></el-col>
					<el-col :span="3"><div class="grid-content bg-purple">
						<el-row>
							<el-button type="primary">质量标准</el-button>
						</el-row>
					</div></el-col>
					<el-col :span="3"><div class="grid-content bg-purple">
						<el-row>
							<el-button type="primary">质量数据</el-button>
						</el-row>
					</div></el-col>
				</el-row>
				<el-row :gutter="150" style="margin-top: 20px">
					<el-col :span="3"><div class="grid-content bg-purple">
						<el-row>
							<el-button type="primary">质检报告</el-button>
						</el-row>
					</div></el-col>
				</el-row>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default {
	name: "home",
	data() {
		const item = {
			date: '2016-05-02',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄'
		};
		return {
			tableData: Array(20).fill(item)
		}
	}
}
</script>

<style scoped lang="css">
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
html,body,#app,.el-container{
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

&:last-child {
	 margin-bottom: 0;
 }
}

.el-col {
	border-radius: 4px;
}

.bg-purple-dark {
	background: #99a9bf;
}

/*.bg-purple {*/
/*	background: #d3dce6;*/
/*}*/

.bg-purple-light {
	background: #e5e9f2;
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
