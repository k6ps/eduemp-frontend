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
        <div class="logo">
            <Link to="/">
                <img src="img/logo.png" alt="EduEmp logo"/>
            </Link>
        </div>
    </header>
    <main>
        <Route path="student" component="{StudentHome}" />
        <Route path="employer" component="{EmployerHome}" />
        <Route path="university" component="{UniversityHome}" />
        <Route path="/"><Home /></Route>
    </main>
    <footer>
        <span>This is the footer</span>
    </footer>
</Router>
