# Project Description
1. Simplified payment app, where Person 1 can transfer some amount to Person 2.
2. The system captures user data and maintains a transaction structure.
3. User Data: phoneNum: User's phone number.
4. availableAmount: Current balance in the user's wallet.
5. Transaction Structure: from The sender's phone number. to: The recipient's phone number
6. amount: The amount to be transferred.

# Functionalities
1. Login: - Implement a log-in system where a user can log in with their phone number. - If it's the first log-in, allow the user to add an initial amount to their wallet.
2. Transfer Amount: - Allow the user to enter the amount to transfer and the recipient's phone number. - Ensure that the sender has sufficient balance. - Deduct the transferred amount from the sender and credit it to the recipient.
3. Cashback Handling: - Implement cashback based on the following conditions: - No cashback if the amount is a multiple of 500 (e.g., 1000, 1500, 2000). - If the amount is a multiple of 500, randomly give a coupon or notify the user of better luck next time. - 5% cashback if the transaction amount is under 1000. - 2% cashback if the transaction amount is above 1000.
4. Display Information: - Show cashback details after the transaction. - Optionally, display the available amount of the current user.
5. Display the transaction list of the user Evaluation Criteria: Code Structure: Well-organized and modular code.
6. Display the transaction list of the user Evaluation Criteria: Code Structure: Well-organized and modular code.

# Tech Stack Used:
1. Frontend: Vite + ReactJS, Bootstrap
2. Backend: Node.js, Express.js
3. Database: MongoDB Atlas

# To contribute to the repository:
1. Fork and clone the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-feature`
3. Install necessary npm packages.
4. Commit your changes: `git commit -m "Add some feature"`
5. Push to the branch: `git push origin my-feature`
6. Open a pull request.

 # Project Maintainer:
`Rajnish Kumar Singh`
