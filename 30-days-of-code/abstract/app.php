<?php

class MyBook extends Book {
    
    function __construct(string $title, string $author, int $price){
        
        $this->title = $title;
        $this->author = $author;
        $this->price = $price; 
    }
    
    function display(){
        
        echo ('Title: '.$this->title);
        echo ('Author: '.$this->author);
        echo ('Price: '.$this->price); 
    }   
}