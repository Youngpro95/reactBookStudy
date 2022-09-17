// import React from 'react'
// import { useQuery } from 'react-query';

// const Todos = () => {
//   const { isLoading, isError, data ,error } = useQuery("todos", fetchTodoList,{
//     refetchOnWindowFocus : false,
//     retry : 0,
//     onSuccess: data =>{
//       console.log(data);
//     },
//     onError : e=>{
//       console.log(e.message)
//     }

//   })
//   return (
//     <div>Todos</div>
//   )
// }

// export default Todos