<script>
	import { Router, Link, Route } from "svelte-routing";

	import StudentHome from "./StudentHome.svelte";
	import EmployerHome from "./EmployerHome.svelte";
	import UniversityHome from "./UniversityHome.svelte";

	export let url = "/";
</script>

<div class="content hero">
	<div class="wrapper">
		<div class="col col-40">
			<div class="slogan">
				students want to be hired,<br class="hideonmob">
				employers need skilled workforce,<br class="hideonmob">
				univerisity  programmes are outdated – <br class="hideonmob">
				<span class="green">we help you all to collaborate<span>
			</div>
			<Router url="{url}">
				<ul class="role-selection">
					<li><a class="button" href="student">I am student/potential employee</a></li>
					<li><a class="button" href="employer">I am employer representative</a></li>
					<li><a class="button" href="university">I am university programme manager</a></li>
				</ul>
			</Router>
		</div>
		<div class="col img-col col-60">
			<img src="img/hero.png" alt="Hero!"/>
		</div>
	</div>
</div>
<div class="content">
	<div class="wrapper">
		<div class="col col-50">
			<h1>Headline</h1>
			<p>
				Hell of kombucha <a href="student">banjo lomo</a>. Chambray green juice godard flexitarian YOLO fanny pack, twee tumeric. Kinfolk air plant af cray irony, cronut butcher you probably haven't heard of them umami yuccie pok pok locavore 3 wolf moon typewriter. XOXO chillwave YOLO, neutra chicharrones helvetica subway tile schlitz knausgaard sriracha hexagon try-hard. Marfa before they sold out microdosing celiac fanny pack letterpress palo santo heirloom
			</p>
		</div>
	</div>
</div>
