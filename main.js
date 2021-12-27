var names=["Debasis Ghosh","Snehasis Ghosh","Mousumi Ghosh","Ashis Ghosh","Mamoni Ghosh","Kiran Ghosh","Kaustab Ghosh","Ajit Ghosh","Mithu Kundu","Tomal kundu","Bimol Kundu"];
var image=["Debasis_g.png","Snehasis_g.jpg","Mousumi.png","uncle.jpg","aunt.jpg","kir.png","kau.jpeg","ajit.jpeg","mithu.png","tomal.png","cou.jpg"];

var m = 0;
function update(){
    m++;
    var numbers_of_family_member_in_array = 10;
    if (m > numbers_of_family_member_in_array){
        m=0;
    }
    var updatedimg = image[m];
    var updatedname = names[m];
    document.getElementById("img").src = updatedimg;
    document.getElementById("name").innerHTML = updatedname;
    
}