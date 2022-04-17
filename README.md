# EXPRESS LOGISTICS
## System Overview.

EXPRESS Logistics is a web-based system that allows people to send, and recieve whatever movable properties and materials between themselves in any location around the world.

Users of the system will be filling in all the required information about what they want to send, and more details, where they are currently located, the reciever's address, and more other information to facilitate the transfer.

As the user fills out the form, they will also be provided with a payment system form that they will use to secure their order.

The system administrators who are the manager's of the system in the company will be recognizing that there is a request sent by a user, and therefore go get the cargo and transport it to the specified destination.

After the cargo reaches the destination, the send will be notified about the success of the transfter.

## System features. 

### Functional Requirements.
1. **The system should allow the user to login and create an account**: The system should allow users to create accounts,login and have a user space where they will be able to check on the progress of their transfer and other information like their credentials.
2. **The system should allow users to modify their credentials.**: The system should allow users to modify their credentials like their username, passowrd, image, etc.
3. **The system should have a landing page**: The system should provide a landing page on which users will be reaching on when they call the domain name of the system. 
4. **The landing page of the system should contain detailed information about services provided by the system**: The system should provide details about services offered by the system such as: 
	* Ocean Import/Export
	* Air Freight Forwarding
	* Land Way Tranfer
	* Household Forwarding/Transportation
	Other information like the location, contacts, and others will also be provided on that page.
5. **The system should provide a ***pop-up*** signing form**: The system should display a popup form when ever the a user clicks on the signup button in the upper-right corner of the page.
6. **The system should provide a ***pop-up*** login form**: The system should display a popup login form whenever the login button is clicked on in the upper-right corner of the page.
7. **When ever the user has successfully loged in the system, the user login and signing buttons will be changed**: When ever a user successfully logs in the system. The login button will be holding the user's name and then the signing button will be changing to logout button.
8. **When ever a user has successfully created an account, they should be immediately redirected to the landing page of the system but loged in.**
9. **The user account on the system should hold user data and his history**: The user account should contain details such as:
	* Credentials like: Username, full names, national id number, email address, phone number and othes.
	* Information related to the cargo he sent.
	* Progress of the cargo transportation
	* Commands or buttons that allow the user to logout and modify their account.
10. **The system should provide a form a user will be using to fill in a transfer request**: When ever a user clicks on the transfer button on the navigation bar, they should be presented with a multi-steps form to fill in all required information to make the transfer request complete.
	* These steps are as follow:
		* User information:
			- First name
			- Last name 
			- Gender
			- Email address 
			- Phone number 
			- Date of birth
		* User/Cargo Location: 
			- Country 
			- District/City
			- Postal code 
			- Street Address 
			- House number
		* Cargo Description
			- Size(Length, width),
			- Weight(kg)
			- Category
			- Perishable/non-perishable.
		* Reciever Information
			- First name 
			- Last name
			- Gender 
			- Email address 
			- Phone number 
			- Date of birth 		
		* Terms and Conditions: 
		* Payment information:
11. **The sytem should calculate the price of the service according to information filled in by the user in the form**: According to the information specified above about the cargo size, weight, type, etc, the system shall automatically generate the price it shall take the user to send that cargo.
12. THe system should have at least the following pages:
	* Landing page
	* About page
	* Contact page
	* Services page
	* Dashboard for system administrators
	* User account page

### Non-Functional Requirements
1.  **Safety requirements**: 
	* The user will be be able to continue to the last step of the form which contains payment information only after they have read, and clicked on the check button that confirms that they accept the terms and conditions provided by the transfer company and system.
	* Only users with valid accounts will be allowed to login in the system.
	* Users without accounts will not be allowed to login in the system unless they first sign up, and get confirmed accounts.
	*  
