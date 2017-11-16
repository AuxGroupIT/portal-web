import axios from 'axios';

var PERFORMANCE_URL = 'https://open.auxgroup.com/api/auxhr/employee/performance/result/';
var COMPYANY_URL = 'https://open.auxgroup.com/api/auxhr/employee/company/';
var EMPLOYEE_URL = 'https://open.auxgroup.com/api/auxhr/employee/employees/';
var SALARY_URL = 'https://open.auxgroup.com/api/auxhr/salary/salary/';
export default {	

	getCompanyList(groupid) {
		return axios.get(COMPYANY_URL + groupid);
	},
	getCompanyDetail(id) {
		return axios.get(COMPYANY_URL + 'detail/' + id);
	},
	getPerformance(badge, year, type) {
		return axios.get(PERFORMANCE_URL + 'badge/' + badge + '/year/' + year + '/type/' + type)
	},
	getEmployee(badge) {
		return axios.get(EMPLOYEE_URL + 'badge/' + badge)
	},
	saveEmployee(employee) {
		return axios.post(EMPLOYEE_URL, employee)
	},
	getBankCard(badge) {
		return axios.get(SALARY_URL + 'bankcardno/badge/' + badge)
	}

}