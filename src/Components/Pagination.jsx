import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'


export const Pagination = ({ total, selected, onPageChange }) => {

  
  const [numbers, setnumbers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount,setTotalCount] = useState(0);

  useEffect(() => {
    const getTodo = async () => {
      let res = await axios.get(
        `http://localhost:8080/numbers?_page=${page}&_limit=5`
      );
      setnumbers(res.data);
      setTotalCount(Number(res.headers['x-total-count']))
    };
    getTodo();
  }, [page]);

  return <div className="pageContainer">
    {numbers.map((todo) => {
          return (
            <div key={todo.id}>
              {todo.id}
              {" : "}
              {todo.value}
            </div>
          );
        })}
        <button
          disabled={page <= 1}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          {"<"}
        </button>
        <button disabled={totalCount < page * 5} onClick={() => setPage(page + 1)}>{">"}</button>
  </div>;
};
