<?php

// Write your code here
    function __construct($elements){
        $this->elements = $elements;
    }
    
    function computeDifference(){
        $differences = array();
        
        
        for($i = 0; $i < count($this->elements); $i++){
            for($j = 0; $j < count($this->elements); $j++){
                
                $dif = $this->elements[$i] - $this->elements[$j];
                
                array_push($differences, $dif);
            }
        }
        $this->maximumDifference = max($differences);
    }