import axios from 'axios'

 const client = axios.create({
    baseURL : "http://localhost:8001"
})



export async function getProducts(){
    const {data} = await client("/Products")

    return data;
}

export async function getProdect(id : string | number){
    const {data} = await client(`/Products/${id}`)

    return data;
};

export async function FLogin(username : string , password : string){
    const {data} = await client({
        method :"POST",
        url : "/login",
        data : {
            username , 
            password
        }
    } )
    return data
};
