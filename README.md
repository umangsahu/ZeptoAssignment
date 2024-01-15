Zepto Frontend Development Assignment
Overview

This project is a React application that implements a dynamic input field with an associated list of items. The application allows users to type in the input field, filter the list based on the input, convert selected items into chips, and remove chips with a "X" icon. Additionally, it implements a bonus task where the last chip is highlighted upon pressing backspace with an empty input.
Technologies Used

    React
    TypeScript
    Tailwind CSS

Specifications

    List Filtering:
        Clicking on the input field reveals a list of items.
        As the user types, the list dynamically updates to show only items matching the input.

    Chips and Input Field:
        Clicking on an item in the list turns it into a chip at the top.
        The input field adjusts automatically to accommodate the selected chips.
        Once an item becomes a chip, it is removed from the list.

    Chip Removal:
        Each chip has an "X" icon.
        Clicking the "X" icon removes the chip and adds the item back to the list.

Bonus Task

    Backspace Handling:
        When the input is blank, pressing backspace highlights the last chip.
        Pressing backspace again removes the highlighted chip.

Getting Started

Follow these steps to set up and run the project on your local machine:

    Clone the repository: git clone https://github.com/your-username/zepto-frontend-assignment.git
    Navigate to the project directory: cd zepto-frontend-assignment
    Install dependencies: npm install
    Start the development server: npm start

Code Structure

    The main application logic is implemented in the App component.
    Components such as InputField, ChipsList, and ListItem are created to modularize the code.
    TypeScript is used to enhance code clarity and provide type safety.
    Tailwind CSS is utilized for styling to ensure a clean and responsive design.

Bonus Task - Clean Code

The code adheres to clean coding practices, ensuring readability and maintainability. Descriptive variable names, proper indentation, and comments are used where necessary to enhance code clarity.
Contributors

    Your Name
    Other contributors (if any)

License

