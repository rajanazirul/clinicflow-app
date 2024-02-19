async function fetchData() {
  let data: any = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await data.json();
  return data;
}

async function Posts() {
  let products = await fetchData();
  return (
    <div>
      {products?.map((item: any) => (
        <div key={item.id}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
