
// import {useState,useEffect, useMemo, useCallback} from 'react';
// function LiveSearch() {
// const [query, setQuery] =useState('');
// const [users, setUsers] = useState([]);
// useEffect (()=>{
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then ((response) =>response.json())
//   .then ((data) =>setUsers(data));
// },[]);

// const filteredUsers = useMemo(
//   ()=>users.filter((user)=>user.name.toLowerCase().includes(query.toLowerCase())),[query, users]
// );

// const handleSearch =useCallback((event)=>{
// setQuery(event.target.value);
// },[]);
//   return (
//     <>
//     <h2>LiveSearch</h2>
//     <input type="text" value={query} placeholder="Search Users..." onChange={handleSearch} />
//     <ul>
//       {filteredUsers.map((user) =>
//         <li key={user.id}>{user.name}</li>
//       )}
//     </ul>
//     </>
//   )
// }

// export default LiveSearch
