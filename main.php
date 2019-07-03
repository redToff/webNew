<?php

if(isset($_COOKIE['login']) and $_COOKIE['login'] !=''){
    echo 'Добро пожаловать '.$_COOKIE['login'];
}else{
    echo 'Войдите с помощью формы входа';
}
