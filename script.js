'use strict'; 
// page switching JS of navbar
const indicator = document.querySelectorAll(".indicator"); 
const links = document.querySelectorAll(".links"); 

let index=0;

for(let i=0; i<links.length;i++)
{
     index=0; 
     links[i].addEventListener("click",function()
     {
          links[i].href=`${links[i].id}.html`; 
          indicator[i].classList.remove("hidden"); 
          indicator[index].classList.add("hidden");
          index = i; 
     }); 
}


// destination switching 
const destinationLinks = document.querySelectorAll(".destination-links")
const destinationIndicator=document.querySelectorAll(".destination-indicator"); 
const destinationTitle=document.querySelector(".destination-title");
const destinationPara=document.querySelector(".destination-para"); 
const planetImage=document.querySelector(".planet-image"); 
const distance=document.querySelector(".distance"); 
const duration=document.querySelector(".time"); 

const moon = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";

const mars = "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain inour solar system. It's two and a half times the size of Everest!";

const europa = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."; 

const titan = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."; 

const arr=[moon,mars,europa,titan];

const distancesOb = 
{
     moon : "384,400 km",
     mars : "225 mil. km",
     europa : "628 mil. km",
     titan : "1.6 bil. km"
}; 

const timeOb = 
{
     moon : "3 days",
     mars : "9 months", 
     europa : "3 years",
     titan : "7 years"
}; 

for(let i=0; i<destinationLinks.length;i++)
{
     index=0; 
     destinationLinks[i].addEventListener("click",function()
     {
          destinationIndicator[i].classList.remove("hidden"); 
          destinationIndicator[index].classList.add("hidden");
          index = i; 
          destinationPara.textContent=arr[i]; 
          destinationTitle.textContent=destinationLinks[i].id.toUpperCase(); 
          planetImage.src=`./assets/destination/image-${destinationLinks[i].id}.webp`; 
          distance.textContent=distancesOb[destinationLinks[i].id]; 
          duration.textContent=timeOb[destinationLinks[i].id]; 
     }); 
}



// crew switching

const crew=document.querySelectorAll(".crew-btn"); 
const crewImage=document.querySelector(".crew-person"); 
const crewRole=document.querySelector(".crew-role"); 
const crewName=document.querySelector(".crew-name"); 
const crewAbout=document.querySelector(".crew-about"); 

const role = 
{ 
     crew1 : "COMMANDER",
     crew2 : "FLIGHT ENGINEER", 
     crew3 : "PILOT",
     crew4 : "MISSION SPECIALIST"
}; 

const names = 
{
    crew1 : "DOUGLAS HURLEY", 
    crew2 : "ANOUSHEH ANSARI", 
    crew3 : "VICTOR GLOVER", 
    crew4 : "MARK SHUTTLEWORTH"
}; 

const about =
{
     crew1 : "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", 

     crew2 : "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",

     crew3 : "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",

     crew4 : "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
}

for(let i=0; i<crew.length;i++)
{
     index=0; 
    
            crew[i].addEventListener("click",function()
            {
                 crew[index].classList.remove("white"); 
                 crew[i].classList.add("white"); 
                 index=i;
                 crewImage.src=`./assets/crew/image-crew-${i}.webp`;
                 crewRole.textContent=role[crew[i].id]; 
                 crewName.textContent=names[crew[i].id]; 
                 crewAbout.textContent=about[crew[i].id]; 
            }); 
     
}


//tech switching

const tech=document.querySelectorAll(".tech-btn"); 
const termTitle=document.querySelector(".term-title"); 
const termDescription=document.querySelector(".term-description"); 
const techImage=document.querySelector(".tech-image");

//Refactoring need starts
const change = function (indexAdd,indexRemove,className) //toggle button function in tech page
{
     if(indexAdd!==indexRemove)
     {
       tech[indexAdd].classList.add(className); 
       tech[indexRemove].classList.remove(className); 
     }
}
//Hover effect 
for(let i=0; i<tech.length;i++)
{
     tech[i].addEventListener("mouseenter",function()
     {
         tech[i].classList.add("tech-hover"); 
     }); 
}
// Hover leave effect 
for(let i=0;i<tech.length;i++)
{
     tech[i].addEventListener("mouseleave",function()
     {
          tech[i].classList.remove("tech-hover"); 
     });
}


const title = 
{
     launchvehicle : "LAUNCH VEHICLE",
     spacecapsule : "SPACE CAPSULE",
     spaceport : "SPACEPORT"
}
const description =
{
     launchvehicle : "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",

     spacecapsule : "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",

     spaceport : "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch."
} 

const shadow = ["1px 1px 90px 1px rgb(201, 167, 15,0.8)","1px 1px 90px 1px rgba(52, 144, 255, 0.8)","1px 1px 90px 1px rgba(31, 251, 255, 0.8)"]; 

//Selected effect
for(let i=0;i<tech.length;i++)
{ 
     index=0; 
     tech[i].addEventListener("click",function()
     {
       change(i,index,"white");
       techImage.src=`./assets/technology/image-${tech[i].id}-portrait.jpg`; 
       termTitle.textContent=title[tech[i].id];
       termDescription.textContent = description [tech[i].id];  
       techImage.style.boxShadow = shadow[i];
       index=i; 
     }); 
}
//Refactoring need ends


// Hamburger menu design 

const ham = document.querySelector(".bi-list")
const hamMenu = document.querySelector(".hamburger")

ham.addEventListener("click", function(e)
{
     hamMenu.style.display="block"; 
     ham.style.display = "none"; 
});



document.addEventListener("click",function(e)
{
     if(window.matchMedia("(max-width : 733px)").matches && e.target.id!=="hamburger-box" && e.target.id!=="ham-menu")
     {
          ham.style.display="block"; 
          hamMenu.style.display="none"; 
     }
})
