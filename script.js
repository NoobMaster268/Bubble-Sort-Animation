let values = [];
let i = 0, j = 0;


function setup() {
    createCanvas(800, 500);
    for(let i = 1; i < width/25; i++){
        values[i] = random(0, height-10);
    }
    //sort(values);

}

function draw() {
    background(100);
    let temp = 0;
    for(let i = 1; i < width/25; i++){
        stroke(255);
        fill(100, 100, 100);
        //rect(i, height, 10, values[i]);
        strokeWeight(15);
        stroke("orange");
        line(i*25, height, i*25, height - values[i]);
    }
    for(let speed = 0; speed < 1; speed++){
        if(j >= width/25){
            j = 0;
            i++;
        }
        else{
            if(values[j] > values[j+1]){
                temp = values[j+1];
                values[j+1] = values[j];
                values[j] = temp;
            }
            j++;
        }
    }
    if(i >= width/25){
        noloop();
    }
    
}
