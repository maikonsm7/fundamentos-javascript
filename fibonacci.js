// Sequencia de fibonacci usando recursividade

//função recursiva
function fibo(n){
    if(n == 0 || n==1) return n
    return fibo(n - 1) + fibo(n - 2)
}

// imprime 7 elementos da sequência de fibonacci
for(let i = 0; i<7; i++){
    console.log(fibo(i));
}