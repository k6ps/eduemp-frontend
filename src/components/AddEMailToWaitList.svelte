<script>
    let eMailAddress = '';
    let role = '';

    function addToInterestedList() {
        alert("Thank you, " + eMailAddress + " (" + role + "), for your interest!");
        eMailAddress = '';
        role = '';
    }
</script>

<div class="add-email-to-waiting-list">
    <span><b>Interested?</b> Leave us your email and we'll get in touch!</span><br>
    <span>I am a: </span>
    <label>
        <input type="radio" bind:group={role} value={'student'}>
        Student
    </label>
    <label>
        <input type="radio" bind:group={role} value={'employer'}>
        Employer representative
    </label>
    <label>
        <input type="radio" bind:group={role} value={'university'}>
        University representative
    </label>
    <input bind:value={eMailAddress} placeholder="My email" />
    <a class="button" on:click="{addToInterestedList}">I am interested!</a>
</div>
