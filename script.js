$("#submit").click(function(){
    if($("#email").val()==='' && $("#password").val()===''){
        alert('Email and Password is Required');
    } else{
        alert('Email and Password is Accepted');
    }
});

$(document).ready(function() {
    var queue = [];
    var stack = [];

    $('#queue-btn').click(function() {
        var numCustomers = prompt("How many customers will you cater today?");
        for (var i = 0; i < numCustomers; i++) {
            var customerName = prompt("Enter name of customer");
            queue.push(customerName);
        }
        while (queue.length > 0) {
            $('#output').append("Serving: " + queue[0] + "<br>");
            $('#output').append("Served: " + queue.shift() + "<br>");
            $('#output').append("Size: " + queue.length + "<br><br>");
        }
    });

    $('#stack-btn').click(function() {
        while (true) {
            var choice = prompt("Choose an operation:\n1. Push\n2. Pop\n3. Size\n4. Peek\n5. Back");
            switch (choice) {
                case '1':
                    var value = prompt("Enter an integer to push:");
                    stack.push(value);
                    $('#output').append(value + " pushed to stack.<br>");
                    break;
                case '2':
                    if (stack.length > 0) {
                        $('#output').append(stack.pop() + " popped from stack.<br>");
                    } else {
                        $('#output').append("Stack is empty.<br>");
                    }
                    break;
                case '3':
                    $('#output').append("Current stack size: " + stack.length + "<br>");
                    break;
                case '4':
                    if (stack.length > 0) {
                        $('#output').append("Top element is: " + stack[stack.length - 1] + "<br>");
                    } else {
                        $('#output').append("Stack is empty.<br>");
                    }
                    break;
                case '5':
                    return;
                default:
                    $('#output').append("Invalid choice. Please try again.<br>");
            }
        }
    });

    $('#user-interface-btn').click(function() {
        var email = [];
        var userName = [];
        var password = [];
        for (var i = 0; i < 3; i++) {
            email[i] = prompt("Enter email:");
            userName[i] = prompt("Enter username:");
            password[i] = prompt("Enter password:");
        }
        var choice = prompt("Select what you want to paste (1 to 3):");
        if (choice >= 1 && choice <= 3) {
            $('#output').append("You chose " + choice + "<br>");
            $('#output').append("Email: " + email[choice - 1] + "<br>");
            $('#output').append("Username: " + userName[choice - 1] + "<br>");
            $('#output').append("Password: " + password[choice - 1] + "<br>");
        } else {
            $('#output').append("Invalid selection. Please choose a number between 1 and 3.<br>");
        }
    });
});
$(document).ready(function() {
    $('#save-btn').click(function(event) {
        event.preventDefault();
        var firstName = $('#first-name').val();
        var middleName = $('#middle-name').val();
        var lastName = $('#last-name').val();
        var age = $('#age').val();
        var email = $('#email').val();

        var isValid = true;

        if (firstName == '') {
            $('#first-name').addClass('error');
            isValid = false;
        } else {
            $('#first-name').removeClass('error');
        }

        if (lastName == '') {
            $('#last-name').addClass('error');
            isValid = false;
        } else {
            $('#last-name').removeClass('error');
        }

        if (age == '') {
            $('#age').addClass('error');
            isValid = false;
        } else {
            $('#age').removeClass('error');
        }

        if (email == '') {
            $('#email').addClass('error');
            isValid = false;
        } else {
            $('#email').removeClass('error');
        }

        if (!isValid) {
            alert('Please fill in all requirements');
            return;
        }

        var row = '<tr>' +
            '<td>' + firstName + '</td>' +
            '<td>' + middleName + '</td>' +
            '<td>' + lastName + '</td>' +
            '<td>' + age + '</td>' +
            '<td>' + email + '</td>' +
            '</tr>';

        $('#table-body').append(row);

        $('#first-name').val('');
        $('#middle-name').val('');
        $('#last-name').val('');
        $('#age').val('');
        $('#email').val('');
    });
});