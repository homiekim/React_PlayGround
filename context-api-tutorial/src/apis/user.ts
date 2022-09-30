export const  getUsers = ()=> {
  return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
}

export const getUser = (id:number) =>{
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
}
