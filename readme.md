# <p align="center"> Light of Hope Project PH </p>

Website based on:

-   [Laravel](https://laravel.com/docs/6.x/)
-   [Tailwindcss](https://tailwindcss.com/)
-   [React](https://reactjs.org/)

### Prerequisite

-   Laravel 6.x
-   PHP >= 7.2.0
-   BCMath PHP Extension
-   Ctype PHP Extension
-   Fileinfo PHP extension
-   JSON PHP Extension
-   Mbstring PHP Extension
-   OpenSSL PHP Extension
-   PDO PHP Extension
-   Tokenizer PHP Extension
-   XML PHP Extension

**See this [link](https://www.php.net/manual/en/install.php) for PHP Installation and Configuration.**

### Download/Clone the repository.

`$ git clone https://github.com/lightofhopeph/laravel-lohp-site.git`

### Create .env file

<p> Copy the .env.example file inside the project directory and rename it to .env. Fill out the information for your server environment.  </p> 
    
### Installing Dependencies
```
1. $ composer install
2. $ npm install
````
### Generate Application key

```
$ php artisan key:generate
```

### Create symbolic link for images

```
$ php artisan storage:link
```

### Compile

<p> For dev environment </p>

```
$ npm run dev
```

<p> For production environment </p>

```
$ npm run production
```

### Deployment

<p> In your virtual host configuration point the document root path to &ltdir of project&gt/public </p>

### Contact

<p> lightofhopeph@gmail.com </p>
