# Recurring Date Picker Component

A reusable **Recurring Date Picker** component built with **Next.js** and **Tailwind CSS**. This component allows users to select recurring dates with options like **Daily**, **Weekly**, **Monthly**, and **Yearly**. Users can also specify a custom interval and set a start and end date for the recurrence.

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Project Overview

This project aims to provide a reusable **Date Picker** component with recurring date options. The component is built using **Next.js**, styled with **Tailwind CSS**, and uses **Zustand** for state management. 

Key Features:
- Select recurring dates (Daily, Weekly, Monthly, Yearly)
- Customize recurrence with intervals (e.g., every X days, weeks, months, or years)
- Display a visual preview of the selected recurring dates on a mini-calendar
- Set a date range (start and end date) for recurrence
- Responsive and customizable UI using Tailwind CSS

## Installation

### 1. Clone the repository

Clone this repository to your local machine.

`bash
git clone https://github.com/your-username/recurring-date-picker.git
cd recurring-date-picker

### 2. Install dependencies
Install all required dependencies:

bash
Copy code
npm install

### 3. Start the development server
To start the development server:

bash
Copy code
npm run dev
The app will be live at http://localhost:3000.


### 4. Features
Recurring Options:

Daily
Weekly
Monthly
Yearly
Customization:

Set the interval (e.g., every X days/weeks/months/years).
Select specific days of the week.
Choose the nth occurrence of a specific day (e.g., second Tuesday of the month).
Date Range: Set the start date and optionally an end date for the recurrence.

Preview: Visual preview of the selected recurring dates.
