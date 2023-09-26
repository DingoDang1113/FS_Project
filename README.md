# Welcome to weekday, Your MayFlowers Employee Portal!
Join us to experience a simplified and efficient employee management system.

**[Sign up here](https://weekday-mayflowers-6ac8879d7399.herokuapp.com/)**

Inspired by the acclaimed enterprise software [Workday](https://www.workday.com/), weekday mirrors crucial features encompassing employment lifecycle, search functionality, and organizational chart visualization. Our portal is tailored to provide distinct accessibility and actions for HR personnel, managers, and general users, promoting an organized and user-centric experience.

![login](https://github.com/DingoDang1113/FS_Project/assets/73029929/a8c28930-37d2-4016-b257-19a1df5d6827)

## 🛠 Technologies Employed:

* **Frontend:**
  - JavaScript
  - React
  - Redux
  - HTML
  - CSS
* **Backend:**
  - Ruby on Rails
  - PostgreSQL
* **Libraries & Middleware:**
  - Thunk
  - [Org-Chart Library](https://github.com/dabeng/react-orgchart)
* **API Communication:**
  - jQuery for streamlined front-end and back-end data flow

## 💼 Core Features:

weekday leverages React/Redux to meticulously manage front-end states, ensuring a smooth user interaction across multiple pages. Our back-end, built on Ruby on Rails, extends robust API controllers to support user CRUD actions, authentication, and organizational chart functionalities.

### User Authentication
* Users can sign up, log in and log out.
* Users can view or search profiles of themselves or others.
* Managerial users can view detailed profiles of their team members.
* HR users have the privileges to edit profiles, including onboarding and offboarding employees.

### Employee Onboarding/Offboarding
* Creation of comprehensive employee profiles.
* Streamlined procedures for onboarding.
* Structured protocols for offboarding, addressing data retention and access management.

### Function Dashboard & Org Chart
* Index page listing all functions.
* User-friendly design enhancing navigation and user engagement.
* Org Chart integration with existing employee data, supplemented with filtering and sorting functionalities.

### Search Functionality
* Robust search feature enabling lookup by name.
* Instant return of search results with links to detailed employee pages.
* Ability to view and update specific employee details from their respective pages.

## Highlighted Features 
### Search 

weekday provides a Search function housed within its own component, embedded in the top header bar, allowing users to search for employees across different pages. Upon input of a letter, a dropdown menu displays the corresponding results of employees whose names contain that letter(s). Hovering over an item darkens the background to emphasize selection. Clicking on a name navigates to the profile detail page of the selected employee. 

![search img](https://github.com/DingoDang1113/FS_Project/assets/73029929/e7740053-4e07-403a-ab6e-a7beb858c72a)

![result img](https://github.com/DingoDang1113/FS_Project/assets/73029929/a05453c9-cfda-4314-a1d8-65411d4c4ff4)

### Org Chart 
weekday also provides a live org-chart visualization to mirror the current reporting hierarchy. This responsive org chart allows focusing on individual managers or viewing the overall organizational structure. Clicking on an individual box navigates to the profile detail page of that employee. 

![Org Chart Full](https://github.com/DingoDang1113/FS_Project/assets/73029929/c37afb5a-c2f0-41f6-8196-d1dc20d8ceac)
![Org Chart Tech](https://github.com/DingoDang1113/FS_Project/assets/73029929/a3df4ba7-5029-4d46-a045-767372aa1035)


## 🚀 Future Features 

* **Time-Off Request:**
  - Implement a system for employees to request time off, with managerial approval workflows.
  
* **Analytic Dashboard for Manager/HR:**
  - Develop a comprehensive analytic dashboard providing insightful reports on various HR metrics to aid managerial decision-making.
  - Include export functionality to allow managers and HR to download reports as Excel or PDF files for further analysis and sharing.
  
* **Ask HR Case Management System:**
  - Create a case management system to channel employee queries to respective HR functions, ensuring timely responses and resolutions.
  
* **Modal for Job Info Lookup:**
  - Introduce a modal window feature for quick lookup of job-related information, enhancing user experience and efficiency.









