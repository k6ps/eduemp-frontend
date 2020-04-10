<script>
	import { Router, Link, Route } from "svelte-routing";

	import Home from "./routes/Home.svelte";
	import StudentHome from "./routes/StudentHome.svelte";
	import EmployerHome from "./routes/EmployerHome.svelte";
	import UniversityHome from "./routes/UniversityHome.svelte";

    export let url = "";
</script>

<Router url="{url}">
    <header>
			<div class="wrapper">
				<div class="logo">
					<img src="img/logo.svg" alt="EduEmp logo"/>
				</div>
			</div>
    </header>
    <main>
        <Route path="student" component="{StudentHome}" />
        <Route path="employer" component="{EmployerHome}" />
        <Route path="university" component="{UniversityHome}" />
        <Route path="/"><Home /></Route>
    </main>
    <footer>
			<div class="wrapper">
        <span>This is the footer</span>
			</div>
    </footer>
</Router>
