<template>
<div class="main_app">
    <div class="header">
        <el-button type="primary" class="addCompany" size="small" @click="changeDialogVisible"> 新增公司 </el-button>
    </div>
    <div class="content">
        <el-table :data="tableData" style="width: 100%" stripe size='small'>
            <el-table-column label="公司名称" prop="companyName"></el-table-column>
            <el-table-column label="自由现金流" prop="freeCashFlow" width="100"></el-table-column>
            <el-table-column label="3年后利润" prop="profit" width="100"></el-table-column>
            <el-table-column label="25倍PE" prop="pe25"></el-table-column>
            <el-table-column label="30倍PE" prop="pe30"></el-table-column>
            <el-table-column label="高点值" prop="pe50"></el-table-column>
            <el-table-column label="无风险收益率" prop="noRisk" width="120"></el-table-column>
            <el-table-column label="无风险收益率x2" prop="noRiskDouble" width="120"></el-table-column>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
    <el-dialog title="提示" :visible="dialogVisible" >
        <el-form ref="form" :rules="rules" :model="form" label-width="110px">
            <el-form-item label="公司名称" prop='companyName'>
                <el-input v-model="form.companyName" placeholder="公司名称"></el-input>
            </el-form-item>
            <el-form-item label="自由现金流" prop='freeCashFlow'>
                <el-input v-model="form.freeCashFlow" placeholder="自由现金流,可理解为净利润"></el-input>
            </el-form-item>
            <el-form-item label="无风险收益率" prop='noRisk'>
                <el-input v-model="form.noRisk" placeholder="例如:0.04"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="changeDialogVisible">取 消</el-button>
            <el-button type="primary" @click="submitDialogForm">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            dialogVisible: false,
            form: {
                companyName: '',
                freeCashFlow: '',
                noRisk: ''
            },
            rules: {
                companyName: [{
                        required: true,
                        message: '公司名称',
                        trigger: 'blur'
                    },
                ],
                freeCashFlow: [{
                    required: true,
                    message: '自由现金流',
                    trigger: 'blur'
                }],
                noRisk: [{
                    required: true,
                    message: '无风险收益率',
                    trigger: 'blur'
                }],
            },
            tableData: []
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        changeDialogVisible() {
            const _this = this;
            _this.dialogVisible = !_this.dialogVisible;
        },
        submitDialogForm() {
            const _this = this;
            _this.calculateTable();
            _this.dialogVisible = !_this.dialogVisible;
            _this.form.companyName = '';
            _this.form.freeCashFlow = '';
            _this.form.noRisk = '';
        },
        calculateTable(){
            const _this = this;
            let companyName,freeCashFlow,profit,pe25,pe30,pe50,noRisk,noRiskDouble;
            noRiskDouble = _this.form.noRisk * 2;
            profit = _this.form.freeCashFlow * Number(Math.pow(1+noRiskDouble,3).toFixed(2));
            pe25 = profit * 25;
            pe30 = profit * 30;
            pe50 = profit * 30 * 1.5;
            _this.tableData.push({
                companyName:_this.form.companyName,
                freeCashFlow:_this.form.freeCashFlow,
                profit,
                pe25,
                pe30,
                pe50,
                noRisk:_this.form.noRisk,
                noRiskDouble
            })
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
    margin-bottom: 10px;
}
</style>
