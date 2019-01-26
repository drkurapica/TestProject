# TestProject
 This is a React Native Project for development an application to display the most recent images from Flickr in a grid layout.   
 Third part library&dependencies: *react-native-elements*, *react-native-vector-icons*   
# Implmented Function:
 1.Fetch image from Flickr:  
   Impelement a functionality to display a grid with loading indicator on first launch and begin fetching items from Flickr;    
 2.Display images in a grid layot(scrollable):  
   Impelement a functionality to display images in a grid layot(scrollable);      
 3.Display a specific image:  
   Impelement a functionality to display a “Load More” button at end of each batch of thumbnails;       
 4.Fecth more images by "Load More" Button:    
   Impelement a functionality to let "More” button not be displayed after the last batch of thumbnails;       
 5."Load More" Button will be disappeared after all the images be fetched:    
   Impelement a functionality to let “Load More” button should not be displayed after the last batch of thumbnails.

# Project Structure
```
TestProject
├── AppDemo.mp4             It is to show the demo of displaying the most recent images from Flickr.
├── README.md               This is the instruction for the application of displaying the most recent images from Flickr.
└── viewGridApp             This is a folder for the whole application, which includes all files within this project.
    ├── android
    ├── images              It saves all resource of images for this project. 
    ├── ios
    ├── src
    │   ├── Components      
    │   │   ├── Main.js     It is the main part of the application. 
    │   │   └── Photo.js    It is to display a specific image in the application.
    │   └── Utils
    │       └── api.js      It is to save account’s information and provide an interface for fetching image's information from flickr's server.
    ├── .babelrc
    ├── .buckconfig
    ├── .flowconfig
    ├── .gitattributes
    ├── .gitignore
    ├── .watchmanconfig
    ├── App.js
    ├── app.json
    ├── index.js           This is the entry point for the application of displaying the most recent images from Flickr. 
    ├── package-lock.json
    ├── package.json
    └── yarn.lock
```
