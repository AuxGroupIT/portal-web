<template>
	<div class="row border-bottom white-bg">
		<nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
			<div class="navbar-header">
				<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"> <i class="fa fa-bars"></i>
				</a>
				<form role="search" class="navbar-form-custom" action="search_results.html">
					<div class="form-group">
						<input type="text" placeholder="请输入关键字..." class="form-control" name="top-search" id="top-search"></div>
				</form>
			</div>
			<ul class="nav navbar-top-links navbar-right">
                <li>
                    <span class="m-r-sm text-muted welcome-message">欢迎来到奥克斯报表平台。</span>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                        <i class="fa fa-envelope"></i>  <span class="label label-warning">16</span>
                    </a>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                        <i class="fa fa-bell"></i>  <span class="label label-primary">8</span>
                    </a>
                </li>
                <li>
                    <router-link to="/portal">
                        <i class="fa fa-sign-out"></i> 登出
                    </router-link>
                </li>
            </ul>

		</nav>
	</div>
</template>

<script>
export default {

}
</script>