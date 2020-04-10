<script>
	import { Router, Link, Route } from "svelte-routing";

	import StudentHome from "./StudentHome.svelte";
	import EmployerHome from "./EmployerHome.svelte";
	import UniversityHome from "./UniversityHome.svelte";

	export let url = "/";
</script>

<Router url="{url}">
	<ul class="role-selection">
		<li><Link to="student">I am student/potential employee</Link></li>
		<li><Link to="employer">I am employer representative</Link></li>
		<li><Link to="university">I am university programme manager</Link></li>
	</ul>
</Router>
<div class="slogan">students want to be hired, employers need skilled workforce, univerisity  programmes are outdated!</div>
