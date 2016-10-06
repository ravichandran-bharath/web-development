<!DOCTYPE html>
<html lang = "en">
   <head>
      <title>Login Page</title>
      <link href = "css/style.css" rel = "stylesheet">
   </head>

   <body>
      <div id = "main">

		<br><br><br>
		<font color="white"> <center><h2>Login</h2> </center> </font>

      <div style="width:40%;position:relative;top:30%;margin:auto;">

         <form class = "form-signin" role = "form"
            action = "#" method = "post">

            <input type = "text" class = "form-control"
               name = "username"
               required autofocus><br>
            <input type = "password" class = "form-control"
               name = "password" required><br>
            <button class = "btn btn-primary btn-block" type = "submit"
               name = "login">Login</button>
         </form>
      </div>
      </div>
   </body>
</html>
