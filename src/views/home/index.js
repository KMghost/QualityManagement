const leftNavAll = [
    {
        icon: 'el-icon-notebook-2',
        path: '/materialsWarehouse',
        title: '质量表格'
    },
    {
        icon: 'el-icon-collection',
        path: '/semifinishedWarehouse',
        title: '质量标准'
    },
    {
        icon: 'el-icon-document-checked',
        path: '/productWarehouse',
        title: '质量数据'
    },
    {
        icon: 'el-icon-document',
        path: '/pivotTable',
        title: '质检报告'
    }
]

const item = {
    date: '2016-05-02',
    name: '王小虎',
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
