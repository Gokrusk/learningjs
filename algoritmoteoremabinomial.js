
//funcion factorial
const factorial = (n) => {
    let c = 1
    let i = 1
  while(c<=n){
    i = i * c
    c++
  }
  return i
}

//funcion combinacion
const combinacion = (n,k) =>{
  i = factorial(n)/(factorial(k)*factorial(n-k))
  return i
}

//terminos
let a = "(x)", b = "(y)"
//n: potencia de binomio    k,i: auxiliares
n = 5, k = 0, i = 0

const sumatoria = (a,b,n) => {
  while ( k <= n) {
  
    //coeficiente
    let h = combinacion(n,k)
    //exponente de a
    let x = n-k
    //k: exponente de b
  
    //sumatoria c(n,k)(a^n-k)(b^k)
    let binomio = `${h}${a}<sup>${x}</sup>${b}<sup>${k}</sup>`

    //print
    document.write(binomio)
    if(k < n)
    {
      document.write(" + ")
    }
    k++
  }
}

//call function
sumatoria(a,b,n)

