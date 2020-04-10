<script>
	import { Router, Link, Route } from "svelte-routing";

	import StudentHome from "./StudentHome.svelte";
	import EmployerHome from "./EmployerHome.svelte";
	import UniversityHome from "./UniversityHome.svelte";

	export let url = "/";
</script>

<div class="content hero">
	<div class="wrapper">
		<div class="col">
			<div class="slogan">
				students want to be hired,<br>
				employers need skilled workforce,<br>
				univerisity  programmes are outdated –<br>
				<span class="green">we help you all to collaborate<span>
			</div>
			<Router url="{url}">
				<ul class="role-selection">
					<li><a class="button" href="student/index.html">I am student/potential employee</a></li>
					<li><a class="button" href="employer/index.html">I am employer representative</a></li>
					<li><a class="button" href="university/index.html">I am university programme manager</a></li>
				</ul>
			</Router>
		</div>
		<div class="col img-col">
			<img src="img/hero.png" alt="Hero!"/>
		</div>
	</div>
</div>
<div class="content">
	<div class="wrapper">
	</div>
</div>
