var details = new Array();

details[0]=new Array(3);
details[0][0]="Apple";
details[0][1]="mango";
details[0][2]="guava";

details[1]=new Array(2);
details[1][0]="banana";
details[1][1]="pine apple";

for(j=0; j<=1; j++){

    for(i=0; i<=2; i++){
    
        document.write(details[j][i]);
    
        document.write("<br>");
        
    }}
