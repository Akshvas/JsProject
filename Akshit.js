/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/ 

// create a variable to hold your NFT's
let numNFTs =[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name,age,college, Country, Coll_Section , Attendence, Course,pass_year ) {
    let NFT ={
        "name":name,
        "age":age,
        "college":college,
        "Country":Country,
        "Coll_Section":Coll_Section,
        "Attendence":Attendence,
        "Course":Course,
        "pass_year":pass_year, 

    }
    numNFTs.push(NFT);
    console.log("_________________ Name : " +name );
} 

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(let i=0;i < numNFTs.length;i++){
    console.log("\n\n_________________ Start of Student Details ________________\n" );
    console.log("ID :       " + (i+1));
    console.log("Name:      " + numNFTs[i].name);
    console.log("Age:       " + numNFTs[i].age);
    console.log("College:   " + numNFTs[i].college);
    console.log("Country:   " + numNFTs[i].country);
    console.log("Coll_Section:   " + numNFTs[i].Coll_Section);
    console.log("Attendence:   " + numNFTs[i].Attendence);
    console.log("Course:   " + numNFTs[i].Course);
    console.log("pass_year: " + numNFTs[i].pass_year);
    console.log(" ");
    console.log("_________________ End of Student Details ________________\n" );
    console.log("_________________________ NEXT __________________________\n\n" );
  }  
console.log(" ************************* Finish ************************* \n\n"); 

} 

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Details : " +numNFTs.length); 

} 

// call your functions below this line
mintNFT("Akshit",21,"Chandigarh University","India"," 816","100%","CSE","2026");
mintNFT("Ravi",19,"Chandigarh University","India","702","92%","CSE","2028");
mintNFT("Lucky",27,"Cgc ","India","703","90%","CSE","2027");
mintNFT("Anish",21,"Chandigarh University","India","802","70%","CSE","2023");
mintNFT("Mohit",42,"Shardha University","India","308","Ai","2026");
mintNFT("Ankit",19, "Shimla University","India", "123","ML","85%","2025");
mintNFT("Sehaj",21,"delhi university","India","302", "68%","AIML","2027");
mintNFT("John",18, "punjabi university ","India", "105","AI","75%","2025"); 

listNFTs(); 

getTotalSupply();
