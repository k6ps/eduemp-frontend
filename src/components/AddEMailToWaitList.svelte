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
    <input bind:value={eMailAddress} placeholder="Please enter your e-mail" />
    <a class="button" on:click="{addToInterestedList}">I am interested!</a>
</div>