const submitForm = async () => {
    const email = document.getElementById("email").value;

    // Send data to the backend
    try {
     const response = await fetch('http://localhost:3001/api/usersFormData', {
    //  const response = await fetch('http://localhost:8000/usersFormData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });

        if (response.ok) { 
            console.log(response, 'Form data submitted successfully');
        } else {
            console.log(response, 'Failed to submit form data');
        }
    } catch (error) {
        console.log(error, "fetch error")
    }
 
}