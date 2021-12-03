const leftNavAll = [
    {
        icon: 'el-icon-notebook-2',
        path: '/materialsWarehouse',
        title: '原料检验'
    },
    {
        icon: 'el-icon-collection',
        path: '/semifinishedWarehouse',
        title: '半成品、成品的质量数据'
    },
    {
        icon: 'el-icon-document-checked',
        path: '/productWarehouse',
        title: '合格证'
    },
    {
        icon: 'el-icon-document',
        path: '/pivotTable',
        title: '工艺关联'
    },
    {
        icon: 'el-icon-document',
        path: '/pivotTable',
        title: '质量统计'
    }
]

const item = {
    date: '2016-05-02',
    name: '管理员',
    address: '上海市普陀区金沙江路 1518 弄'
};

export default {
    name: 'home',
    data() {
        return {
            leftNavList: [],
            user: item
        }
    },
    methods: {
        goModel(path) {
            this.$router.push({path})

        }
    },
    created() {
        this.leftNavList = leftNavAll
    }
}
