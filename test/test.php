<?php
    $username = filter_var(trim($_POST["username"]));
    $name =  filter_var(trim($_POST["name"]));
    $email =  filter_var(trim($_POST["email"]));
    $password =  filter_var(trim($_POST["password"]));
    $link = mysqli_connect('localhost',"root","","users");
    if (!$link){
        echo "<p>Ошибка: Невозможно подключиться к MySQL " . mysqli_connect_error() . "</p>";
    }
    else {
        echo "<p>Соединение установлено успешно</p>";
    }
    $sql =mysqli_query($link,"INSERT INTO `users` (`Login`, `Name`,`Email`,`Password`) VALUES ('$username', '$name','$email','$password')");
    if ($sql) {
        echo '<p>Данные успешно добавлены в таблицу.</p>';
      } else {
        echo '<p>Произошла ошибка: ' . mysqli_error($link) . '</p>';
      }

?>