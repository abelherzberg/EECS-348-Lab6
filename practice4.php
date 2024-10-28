<?php
    $number = $_POST["size"]; //sets the variable number to the size entered by the user in practice4.html according to the POST method

    $rows = $number; //sets the number of rows for the table to be equal to the size of '$numbers'
    $columns = $number; //sets the number of columns for the table to be equal to the size of '$numbers'
    

    echo "<table style='text-align:center; border-style:double;' >"; //creates the table with a text align center and double border styling

    for($x = 1; $x<= $rows; $x++){ //iterates from 1 to $number
        echo "<tr>"; //creates a new table row for each of the numbers between 1 and the $number value entered

        for($y = 1; $y<= $columns; $y++){ //iterates from 1 to $number
            echo "<td>"  . $x * $y . "</td>"; //calculates the multiplication value between $x and $y and outputs it at the cell correspoding to the ordered pair ($x, $y)
        }
        echo "</tr>"; //ends the row once all $y values have been accounted for for a given $x value
    }

    echo "</table>"; //ends the table, once all values have been printed out
?>