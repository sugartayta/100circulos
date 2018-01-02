var circulitos = []; 
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++){
        circulitos.push(new Path.Circle(new Point(i*10, j*10), 20)) ;
    }
    
}

