export default async function FetchAPI(props: any) {
  const url = `http://localhost:3001/${props.url}`    
  const bodyPost = props.body
   if (props.method === 'POST') { 
    const options = {
      method: props.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body:JSON.stringify(bodyPost)
    }
    return await fetch(url, options)
      .then(response => {
        return response.json();
      }).then(data => {
        return data
      })
  } else {
    console.log(props);
    const options = {
      method: props.method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
    return await fetch(url, options)
      .then(response => {
        return response.json();
      }).then(data => {
        return data
      })
  }
}  
