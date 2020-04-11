<script>
	import { Router, Link, Route } from "svelte-routing";

	import StudentHome from "./StudentHome.svelte";
	import EmployerHome from "./EmployerHome.svelte";
	import UniversityHome from "./UniversityHome.svelte";

	export let url = "/";
</script>

<div class="hero">
	<div class="wrapper">
		<div class="col col-40">
			<div class="slogan">
				Students want to be hired, <br class="hideonmob">
				Employers are looking for talent, <br class="hideonmob">
				University programs are not able to keep up – <br class="hideonmob">
				<span class="green">SmartPick brings them on the same page</span>
			</div>
			<Router url="{url}">
				<h3>Pick your role:</h3>
				<ul class="role-selection">
					<li><a class="button" href="student">Student</a></li>
					<li><a class="button" href="employer">Employer</a></li>
					<li><a class="button" href="university">University</a></li>
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
		<div class="col col-100 center-headline">
			<h1 class="center-headline">Benefits</h1>
		</div>
		<div class="col col-30">
			<h2>Student</h2>
			<ul class="ul-bullet">
				<li>
					Fast forward your career - choose a path that matters to the employer of your dreams
				</li>
				<li>
					Design your study journey to support your career from the beginning
				</li>
				<li>
					Get hired while you're studying
				</li>
			</ul>
		</div>
		<div class="col col-30">
			<h2>Employer</h2>
			<ul>
				<li>
					You can help to create an education path for the talents you want to hire
				</li>
				<li>
					Help to  desing an education journey to suit recruitment needs
				</li>
				<li>
					Give suggestions to all parties, what is the skillset need in the market
				</li>
			</ul>
		</div>
		<div class="col col-30">
			<h2>University</h2>
			<ul>
				<li>
					Innovative universities offer an agile approach to higher education
				</li>
				<li>
					Collaborating with employers
				</li>
				<li>
					Attracting students with the modern system in accordance with the job market they are about to enter
				</li>
			</ul>
		</div>
	</div>
</div>
