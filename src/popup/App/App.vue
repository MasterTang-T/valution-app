<template>
<div class="main_app">
    <div class="header">
        <el-button type="primary" class="addCompany" size="small"> 新增公司 </el-button>
    </div>
    <div class="content">
        <el-table :data="tableData" style="width: 100%" stripe size='small'>
            <el-table-column label="公司名称" prop="companyName"></el-table-column>
            <el-table-column label="自由现金流" prop="freeCashFlow" width="100"></el-table-column>
            <el-table-column label="3年后利润" prop="profit"  width="100"></el-table-column>
            <el-table-column label="25倍PE" prop="pe25"></el-table-column>
            <el-table-column label="30倍PE" prop="pe30"></el-table-column>
            <el-table-column label="高点值" prop="pe50"></el-table-column>
            <el-table-column label="无风险收益率" prop="noRisk"  width="120"></el-table-column>
            <el-table-column label="无风险收益率x2" prop="noRiskDouble" width="120"></el-table-column>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            tableData: [{
                    companyName: '海康威视',
                    freeCashFlow: 137,
                    profit: 456,
                    pe25: 1234,
                    pe25: 2345,
                    pe50: 3456,
                    noRisk: '4%',
                    noRiskDouble: '8%'
                },
                {
                    companyName: '海康威视2',
                    freeCashFlow: 137,
                    profit: 456,
                    pe25: 1234,
                    pe25: 2345,
                    pe50: 3456,
                    noRisk: '4%',
                    noRiskDouble: '8%'
                }
            ]
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        }
    },
}
</script>

<style>
.main_app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-width: 500px;
    min-height: 400px;
    max-height: 600px;
    overflow: auto;
}

.header {
    text-align: right;
    margin-bottom:10px;
}
</style>
