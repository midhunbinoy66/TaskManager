# Daily Task Reminder

A Node.js application that helps you manage your tasks and sends reminders for upcoming due dates.

## Features

- Create, read, update, and delete tasks
- Set recurring tasks (daily, weekly, monthly)
- Receive email reminders for upcoming tasks
- Command-line interface for task management

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- MongoDB
- npm (usually comes with Node.js)

## Installation

1. Clone the repository:
2. Install the dependencies: npm install
3. Create a `.env` file in the root directory with the following content:

MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
RECIPIENT_EMAIL=email_to_receive_reminders
PORT=3000

