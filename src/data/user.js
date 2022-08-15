 export const user = [
    {
        id: 'a',
        username: 'Somsak',
        email: 'admin@gmail.com',
        password: '1234'
    }
]
 
export function signin(email, password){
    return new Promise((resolve, reject)=>{
        const foundUser = user.find(
            (user)=> user.email === email && user.password === password 
        ) 
        setTimeout(()=>{
            if (foundUser){
                resolve(foundUser) 
            }else{
                reject (true)
            }
        }, 2000)
    })
} 