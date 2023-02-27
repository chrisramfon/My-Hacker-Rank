// Declare second integer, double, and String variables.
    $secondInt;
    $secondDoub;
    $secondStr;
// Read and save an integer, double, and String to your variables.
    $secondInt = (int) (readline());
    $secondDoub = (float) (readLine());
    $secondStr = readLine();
// Print the sum of both integer variables on a new line.
    echo($secondInt + $i."\n");
// Print the sum of the double variables on a new line.
    echo number_format(floatval($secondDoub + $d), 1);
    echo ("\n");
// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
    echo($s . $secondStr."\n");
