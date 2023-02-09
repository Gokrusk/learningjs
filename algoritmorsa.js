//valores de p y q
p = 3, q = 7
//valor de z
z = p*q
//valor de fi
fi = (p-1)*(q-1)

//n1 valor pequeño
n1 = 2
//n2 valor normal
n2 = 283
//n3 valor mayor a fi,z o mayor a 100
n3 = 251

//función para encriptar y desencriptar
const enydesn = (n) => {
   
   //buscando s
   h = 1
   s = (fi*h+1)/n
   while (Number.isInteger(s) == false)
   {
      h++
      s = (fi*h+1)/n
   }

   //valor de s
   document.write("Llave: " + s + "<br>")
   //valor de h
   document.write("Valor h: " + h + "<br>")

   //mensaje
   m = 200
   //encriptado (n,z) c=mod(m^n,z)
   c = (m**n)%z
   //desencriptado (s,z) a=mod(c^s,z)
   a = (c**s)%z

   //mensaje encriptado
   document.write("Mensaje encriptado: " + c + "<br>")
   //mensaje desencriptado
   document.write("Mensaje desencriptado: " + a + "<br>")

}
document.write("p: " + p + "<br>")
document.write("q: " + q + "<br>")
document.write("z: " + z + "<br>")
document.write("fi: " + fi + "<br>")
//enydesn(n1)
document.write("<br><br>")
document.write("n2: " + n2 + "<br>")
enydesn(n2)
// document.write("<br><br>")
// document.write("n3: " + n3 + "<br>")
// enydesn(n3)


