# Star_Wars

Please click the link:  http://yuchen-peng-bucket.s3-website-us-east-1.amazonaws.com/

This web app was written in Vue.js, JavaScript and CSS3. When the page is initially loaded, it sends GET request to https://swapi.co/api/people/ to fetch people data(They have several endpoints, in this case, I used /people for the demo). The response are stored into vuex, a centralized state management of vue, and then displayed them on the 'template' of the web page.<br><br>
There is a list of buttons that listing the objects and they are shown as people's name (from object.name), click them you will see the full original people object's data from the response.<br><br>
Please also use "Search" bar to do the fuzzy match and filter the list.<br><br>

That's it! Hope you have a wonderful day! :) <br><br>

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


