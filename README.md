# Simple-Linkr

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/simple-linkr/blob/main/LICENSE)
[![Python](https://img.shields.io/badge/python-3.9-blue)](https://www.python.org/downloads/release/python-390/)
![Status](https://img.shields.io/badge/status-in%20progress-yellow)

Simple-Linkr is a URL shortener app built with Django. It allows users to shorten long URLs into shorter, more manageable links.

## Features

- Shorten long URLs into shorter, user-friendly links
- Track click statistics for each shortened link
- Customizable link aliases for personalized URLs
- User authentication and authorization
- Responsive design for seamless usage on different devices

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SimpleNiQue/simple_linkr.git
   ```

2. Navigate to the project directory:

    ```bash
    cd simple_linkr
    ```

3. Create a virtual environment:

    ```bash
    python3 -m venv venv
    ```

4. Activate the virtual environment:

    ```bash
    source venv/bin/activate
    ```

5. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```
6. Apply database migrations:

    ```bash
    python manage.py migrate
    ```

7. Start the development server:

    ```bash
    python manage.py runserver
    ```

Access Simple-Linkr at http://localhost:8000

## Usage

- Register a new account or log in to an existing account.
- Paste the long URL you want to shorten into the input field.
Optionally, provide a custom alias for the shortened URL.
- Click the "Shorten" button to generate a shortened link.
-  Copy and share the shortened link with others.
- Visit the shortened link to be redirected to the original URL.


Crafted with ❤️ by SimpleNick