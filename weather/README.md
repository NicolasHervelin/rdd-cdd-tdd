# cli-weather

## Description
This application allows the user to know the weather in a city that he has chosen.
The user can choose a country, a city and the scale (°F or °C).
By default, the values of these options are:
  -Country : Bangladesh
  -City : Dhaka
  -Scale : Celcius


## How to use it ?
You can run cli.js in command line.
If you only write "cli.js", the returned results will be the conditions and the temperature of the default city, Dhaka.
You can add two options in the command line to get the weather in another city.
You must write the line like this : "cli.js opt[0] opt[1]"  


## cli.js
This file is the executable in command line.
The "weather" function collects the information by the appropriate query.
The temperature value is given in Fahrenheit, so by default or if the user specify the scale as Celcius this value is converted in Celcius. In the event that the user specify a Fahrenheit scale, there is  no conversion.


## index.js
The two queries defined in this file collects the information about the weather.
If the user run the cli.js without option, the first query will catch the weather in Dakha.
Otherwise, the second query will catch the weather in the chosen city.
The temperature caught by each query is scaled in Fahrenheit.


## Licence

[Uncopyrighted](https://github.com/NicolasHervelin)
