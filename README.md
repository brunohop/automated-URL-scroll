<h2>Qlik Sense Automated URL Scroll / Jump</h2>
<br>
<br>
This extension was based on the Qlik Sense Automated Sheet Scroll developed by Richard Byard.
<br>
A Qlik Sense extension allowing users to set an automated scroll through different sheets in different apps by setting a timer delay and a next sheet to each of the sheets they wish to present. Simple and controllable.
The differences between among the Qlik Sense Automated URL Scroll and Qlik Sense Automated Sheet Scroll is a button to turn on or turn off the scroll/ carousel.  Moreover, you can set any url in the extension. It is useful for automatic changes between 
published apps in your Qlik Sense Server.
<br>
<br>
<br>
<h3>Instructions:</h3>
1. add the extension object 'auto url scroll' to each sheet you wish to be part of your automated presentation (this extention object will appear as a turn on/turn off button).
<br>
<br>
2. On each sheet update the settings; time delay until change and the sheet you wish to change to.
You should insert https://URL.QLIK.SERVER/single/?appid=TARGET_APP_ID&sheet=TARGET_SHEET_ID&select=clearall
<br>
<br>
3. setup all sheets in a loop, i.e. the last sheet points back to the first one, if you wish to display a continuous loop
<br>
<br>
<br>
<h3>Example QVF:</h3>
please explore the example QVF included to see how simple this is to set up. 
The object is in the top left hand corner of each sheet.
It is setup to loop through all 3 sheets continuously with a 10 second delay each time.
<br>
<br>
<br>
<h3>Testing</h3>
Tested with Qlik Sense 11.11.11

