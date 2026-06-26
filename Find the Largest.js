function Find(a , b , c) 
{
    let result = 0
    if(a > b)
        result = a
    if( b > c)
        result = b
    if(c > b)

        result = c
        
    return result
}

console.log(Find(5, 2, 10));