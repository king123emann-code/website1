import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;
import java.util.Stack;

public class index {
    public static void main(String[] args) {
        Scanner man = new Scanner(System.in);
        while (true) {
            System.out.println("Choose an option:");
            System.out.println("1. Queue Operations");
            System.out.println("2. Stack Operations");
            System.out.println("3. User Interface");
            System.out.println("4. Exit");
            int choice = man.nextInt();
            man.nextLine(); 

            switch (choice) {
                case 1:
                    Queue(man);
                    break;
                case 2:
                    Stack(man);
                    break;
                case 3:
                    userInterface(man);
                    break;
                case 4:
                    System.out.println("Exiting...");
                    man.close();
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    public static void Queue(Scanner man) {
        Queue<String> con = new LinkedList<>();
        System.out.println("How many customers will you cater today");
        int numCustomers = man.nextInt();
        man.nextLine();
        for (int i = 0; i < numCustomers; i++) {
            System.out.println("Enter name of customer");
            con.add(man.nextLine());
        }
        while (!con.isEmpty()) {
            System.out.println("Serving: " + con.peek());
            System.out.println("Served: " + con.poll());
            System.out.println("Size: " + con.size());
            
            System.out.println();
        }
    }

    public static void Stack(Scanner man) {
        Stack<Integer> rad = new Stack<>();
        while (true) {
            System.out.println("Choose an operation:");
            System.out.println("1. Push");
            System.out.println("2. Pop");
            System.out.println("3. Size");
            System.out.println("4. Peek");
            System.out.println("5. Back");
            int choice = man.nextInt();
            switch (choice) {
                case 1:
                    System.out.print("Enter an integer to push: ");
                    int value = man.nextInt();
                    rad.push(value);
                    System.out.println(value + " pushed to stack.");
                    break;
                case 2:
                    if (!rad.isEmpty()) {
                        System.out.println(rad.pop() + " popped from stack.");
                    } else {
                        System.out.println("Stack is empty.");
                    }
                    break;
                case 3:
                    System.out.println("Current stack size: " + rad.size());
                    break;
                case 4:
                    if (!rad.isEmpty()) {
                        System.out.println("Top element is: " + rad.peek());
                    } else {
                        System.out.println("Stack is empty.");
                    }
                    break;
                case 5:
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    public static void userInterface(Scanner man) {
        String[] email = new String[3];
        String[] userName = new String[3];
        String[] password = new String[3];

        for (int i = 0; i < 3; i++) {
            System.out.print("Enter email: ");
            email[i] = man.nextLine();
            System.out.print("Enter username: ");
            userName[i] = man.nextLine();
            System.out.print("Enter password: ");
            password[i] = man.nextLine();
        }

        System.out.print("Select what you want to paste (1 to 3): ");
        int choice = man.nextInt();
        man.nextLine(); // consume newline

        if (choice >= 1 && choice <= 3) {
            System.out.println("You chose " + choice);
            System.out.println("Email: " + email[choice - 1]);
            System.out.println("Username: " + userName[choice - 1]);
            System.out.println("Password: " + password[choice - 1]);
        } else {
            System.out.println("Invalid selection. Please choose a number between 1 and 3.");
        }
    }
}