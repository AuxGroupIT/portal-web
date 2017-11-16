<template>
	<div class="wrapper wrapper-content">
		<el-row>
			<el-col :span="4">
				 <el-input
				    placeholder="请输入内容"
				    prefix-icon="el-icon-search"
				    v-model="input21">
				  </el-input>
			</el-col>
			<el-col :offset="1" :span="4">
				<el-input v-model="input21" placeholder="名称"></el-input>
			</el-col>
			<el-col :offset="1" :span="4">
				<el-button type="primary" v-on:click="dialogFormVisible=true" icon="el-icon-search">查询</el-button>
			</el-col>
		</el-row><br>
		<el-table
		:data="tableData"
		style="width: 100%">
		<el-table-column
		  prop="date"
		  label="日期"
		  sortable
		  width="180">
		</el-table-column>
		<el-table-column
		  prop="name"
		  label="姓名"
		  width="180">
		</el-table-column>
		<el-table-column
		  prop="address"
		  label="地址"
		  >
		</el-table-column>
		<el-table-column
		  prop="tag"
		  label="标签"
		  width="100"
		  :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
		  filter-placement="bottom-end">
		  <template slot-scope="scope">
		    <el-tag
		      :type="scope.row.tag === '家' ? 'primary' : 'success'"
		      close-transition>{{scope.row.tag}}</el-tag>
		  </template>
		</el-table-column>
		</el-table>
		<el-tree
		  :props="props"
		  :load="loadNode"
		  lazy
		  show-checkbox
		  @check-change="handleCheckChange">
		</el-tree>

	</div>

</template>

<script>
import data from '../common/siderbar.json'
export default {
	components:{
	},
    data() {
    	return {
    		data: data[0],
    		form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
    		input21: '',
    		dialogFormVisible: false,
			tableData: [{
	          date: '2016-05-02',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄',
	          tag: '家'
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1517 弄',
	          tag: '公司'
	        }, {
	          date: '2016-05-01',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1519 弄',
	          tag: '家'
	        }, {
	          date: '2016-05-03',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1516 弄',
	          tag: '公司'
	        }],
	        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1
    	}
    },
    methods:{
    	handleCheckChange(data, checked, indeterminate) {

      },
      handleNodeClick(data) {
        
      },
      loadNode(node, resolve) {
        if (node.level === 0) {
          return resolve([{ name: 'region1' }, { name: 'region2' }]);
        }
        if (node.level > 3) return resolve([]);

        var hasChild;
        if (node.data.name === 'region1') {
          hasChild = true;
        } else if (node.data.name === 'region2') {
          hasChild = false;
        } else {
          hasChild = Math.random() > 0.5;
        }

        setTimeout(() => {
          var data;
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }];
          } else {
            data = [];
          }

          resolve(data);
        }, 500);
      }
    },
    mounted() {
    	console.log()
    	  this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 1000
        });
    }
}

</script>