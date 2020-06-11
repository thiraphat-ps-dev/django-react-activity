# django-react-activity

An application for recording daily to-do lists.

## Installation

Download and install [Node.Js](https://nodejs.org/en/download/) for install package.
<br/>

Install Python3

```bash
$ npm install python
```

Check Python version

```bash
$ python -V
```

Result

```bash
thiraphat.ps.dev@Mac-mini Django % python -V
Python 2.7.16
```

Install pip

```bash
$ npm install pip
```

Check pip version

```bash
$ pip -V
```

Result

```bash
thiraphat.ps.dev@Mac-mini django-react-activity % pip -V
pip 20.2b1 from /Library/Python/2.7/site-packages/pip-20.2b1-py2.7.egg/pip (python 2.7)
```

Create venv

```bash
$ python3 -m venv ./venv
```

Activate venv

```bash
$ source venv/bin/activate
```

If you want to deactivate use this command
<br>
Deactivate

```bash
$ deactivate
```

Create project directory

```bash
$ makedir django-react-activity
```

Go to root directory

```bash
$ cd django-react-activity
```

Install Django

```bash
$ pip install django
```

Check django version

```bash
$ python -c "import django; print(django.get_version())"
```

Result

```bash
(venv) thiraphat.ps.dev@Mac-mini django-react-activity % python -c "import django; print(django.get_version())"
3.0.7
```

Create project django backend

```bash
$ django-admin startproject backend
```

Structure

```bash
django-react-activity
│
└───backend
```

Go to backend folder

```bash
$ cd backend
```

Create app activity with command

```bash
$ python manage.py startapp activity
```

Structure

```bash
django-react-activity
│
└───backend
    │
    └───backend
    │
    └───activity
```

Run migrations and start server

```bash
$ python manage.py migrate
$ python manage.py runserver
```

Server is running
![image info](./img/runserver_1.png)
