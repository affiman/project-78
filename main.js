var images=["grandmom.JPG", "dad.JPG", "mom.JPG", "abhih.JPG"];

var names=["Grandmom", "Dad", "Mom", "Me"];

var s=0;

function nextpic(){
    s++;

    var total_members=3;

    if (s>total_members){
        s=0;
    }
    var all_images=images[s];

    var all_names=names [s];

    document.getElementById ("family_pics").src=all_images;
    document.getElementById ("family_member_names").innerHTML=all_names;


}

