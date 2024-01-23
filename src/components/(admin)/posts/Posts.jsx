import React from 'react';
const Posts = ({ datas }) => {
  console.log(datas);

  return (
    <div>
      {datas &&
        datas.map((item) => (
          <div key={item.id}>
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>User Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.body}</td>
                  <td>{item.userId}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
};

export default Posts;
